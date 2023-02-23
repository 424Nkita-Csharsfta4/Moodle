import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './user';

const app = express();
const port = 3000;

// middleware для парсинга JSON-запросов
app.use(express.json());

// Регистрация нового пользователя
app.post('/api/register', async (req:any, res:any) => {
    const { username, password } = req.body;

    // Проверка входных данных
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Проверка, что пользователь с таким же именем не существует
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(409).json({ error: 'Username already exists' });
    }

    // Хеширование пароля
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Сохранение информации о пользователе в базе данных
    const user = new User({ username, password: hashedPassword });
    try {
        await user.save();
        res.status(201).json({ id: user.id, username: user.username });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

// Аутентификация пользователя
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;

    // Проверка входных данных
    if (!username || !password) {
        return res.status(400).json({ error: 'Username and password are required' });
    }

    // Поиск пользователя в базе данных по имени пользователя
    const user = await User.findOne({ username });
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    // Генерация токена доступа и токена обновления
    const accessToken = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '15m' });
    const refreshToken = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '7d' });

    // Сохранение токенов в базе данных
    user.refreshToken = refreshToken;
    await user.save();

    // Возврат токенов
    res.json({ accessToken, refreshToken });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server started on port ${ port }`);
});




export { User };
