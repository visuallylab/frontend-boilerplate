# frontend-boilerplate

based on next.js example of with Typescript

## Containes
1. next.js
2. styled-jsx
3. Typescript
4. tslint
5. ant design
6. dotenv
7. basic meta tag setup

## Getting start:
1. copy `.env-template` to `.env` and fill in necessary values.
2. install
```bash
yarn
```
3. run client
```bash
yarn dev
```

## Setup meta tag
1. Modify constants in `constants/index.ts`
2. Replace `favicon.ico` and `large-icon.png`
    - recommended size of `favicon.ico` is 32x32px, `large-icon.png` is over 200px of width.
    - use [favicon generator](https://www.favicon-generator.org/)

## Browser support

Next.js supports IE11 and all modern browsers out of the box using @babel/preset-env.

The next/babel preset includes everything needed to transpile React applications. This includes:
1. preset-env
2. preset-react
3. plugin-proposal-class-properties
4. plugin-proposal-object-rest-spread
5. plugin-transform-runtime
6. styled-jsx