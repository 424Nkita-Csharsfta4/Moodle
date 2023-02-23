# moodl MEVN Stack

This template should help get you started developing with Vue 3 in Vite.
![image](https://user-images.githubusercontent.com/103760832/218572728-4fbf937d-0626-4359-b6b3-b99852efac63.png)

bcrypt - это библиотека для хеширования паролей. Она используется для безопасного хранения паролей пользователей в базе данных. Хеш пароля является неким зашифрованным значением, которое не может быть расшифровано, но может быть проверено на соответствие исходному паролю.

jwt - это библиотека для создания JSON Web Tokens (JWT), которые используются для аутентификации и авторизации пользователей. JWT - это токен, который содержит информацию о пользователе и который можно использовать для проверки подлинности пользователя на сервере. Как правило, JWT включает в себя информацию о пользователе и срок его действия, а также подпись, которая гарантирует, что токен не был подделан.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
