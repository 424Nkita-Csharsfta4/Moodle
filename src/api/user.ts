import mongoose, { Schema, Document } from 'mongoose';
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', userSchema);


export async function createUser(username: string, password: string, email: string, lastname: string) {
  const user = new User({ username, password, email, lastname });
  await user.save();
  return user;
}

export async function loginUser(username: string, password: string) {
  const user = await User.findOne({ username, password });
  if (!user) throw new Error('User not found');
  const token = 'placeholder-token';
  const refreshToken = 'placeholder-refresh-token';
  return { token, refreshToken };
}

module.exports = User;
export function findOne(arg0: { username: any; }) {
    throw new Error('Function not implemented.');
}

export default User;