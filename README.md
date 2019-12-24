# Frontend-boilerplate

based on next.js example of with Typescript

## Includes

1. next.js
2. styled-components
3. Typescript
4. tslint
5. basic meta tag setup

## Getting start:

1. install node modules

```bash
yarn
```

2. Create `.env` and update the value of your own

```bash
cp .env.example .env
```

3. run development server

```bash
yarn dev
```

## Setup your website

Modify constants in `constants/index.ts`
📝 Replace `favicon.ico` and `large-icon.png`

- recommended size of `favicon.ico` is 32x32px, `large-icon.png` is over 200px of width.
- use [favicon generator](https://www.favicon-generator.org/)

## Deploy to gh-page

```bash
yarn deploy
```

## Browser support

Next.js supports IE11 and all modern browsers out of the box using @babel/preset-env.

The next/babel preset includes everything needed to transpile React applications. This includes:

1. preset-env
2. preset-react
3. plugin-proposal-class-properties
4. plugin-proposal-object-rest-spread
5. plugin-transform-runtime
6. styled-jsx
