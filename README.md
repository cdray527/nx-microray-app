# Nextjs, Nx and Module Federation

This is an example project to demonstrate how to use Nx, Next.js and Module Federation together.

> ⚠ This example depends on [@module-federation/nextjs-mf](https://app.privjs.com/package?pkg=@module-federation/nextjs-mf). It will not work unless you have access to this plugin, which is not free.

## Articles

Also this project was created as a proof of concept to write one article, you can read it here:

-   🇬🇧 [English](https://brunos3d.notion.site/Nx-Next-js-and-Module-Federation-EN-US-9c945124ddc246a8b8ca0b5a4a4343a7)
-   🇧🇷 [Portuguese (pt-br)](https://brunos3d.notion.site/Nx-Next-js-e-Module-Federation-PT-BR-7602efbb3b3c41468e961fac5a5b9605)

## Techs & Tools

This project came with some powerful tools

### Core

-   [Nx](https://nx.dev/)
-   [Next.js](https://nextjs.org/)
-   [Webpack](https://webpack.js.org/)

### Plugins

-   [Nx + Next.js plugin](https://nx.dev/packages/next)
-   [@module-federation/nextjs-mf](https://app.privjs.com/package?pkg=@module-federation/nextjs-mf)

### Linting & Tests

-   [Jest](https://jestjs.io/)
-   [Cypress](https://www.cypress.io/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)

### 3rd party components

-   [reactstrap](https://reactstrap.github.io/)

## Remotes

-   Checkout ([preview](https://nextjs-nx-module-federation-checkout.vercel.app))
-   Store ([preview](https://nextjs-nx-module-federation-store.vercel.app))

## Running in the development environment

> To run the project you have to use [Nx CLI](https://nx.dev/using-nx/nx-cli)

To start the project in development mode you can just run:

```bash
npx nx serve store
```

This will start the `host` application, also you can run all apps by using:

serve development:

```bash
npx nx run-many --target=serve --all
```

serve production:

```bash
npx nx run-many -t build
nx run-many --target=serve --configuration=production --all
```

## Creating new apps

You can creating new applications on this workspace using some [Nx Generators](https://nx.dev/generators/using-generators) from this [Nx + Next.js plugin](https://nx.dev/packages/next) like the command bellow:

```bash
npx nx g @nx/next:app app-name
```

## Creating new pages

To generate new pages you can just use:

```bash
npx nx g @nx/next:page new-page --project=app-name
```

## Creating new components

To generate new components you can just use:

```bash
npx nx g @nx/next:component new-component --project=app-name
```

## Creating libraries

You can also use @nx/next plugin to generate libs, shared ui elements, design-system, etc... just running:

```bash
npx nx g @nx/next:lib new-lib-name
```

## Sharing

Other information can be found in the [article](#articles), I also strongly recommend you to take a look at the [module-federation-examples](https://github.com/module-federation/module-federation-examples), especially this [example with nextjs](https://github.com/module-federation/module-federation-examples/tree/master/nextjs)

## Design System Storybook

nx storybook design-system

## Setup new App steps

1. npx nx g @nx/next:app `app-name`
2. Update next.config.js
3. Update port number in project.json
4. nx g @nx/react:setup-tailwind --project=`your app here`
5. Update tailwind config
   /\*_ @type {import('tailwindcss').Config} _/
   module.exports = {
   presets: [require('../../libs/design-system/tailwind.config.js')]
   };
6. Check nx.json , if number of apps is exceeding "parallel" setting
7. Update next.config.js

## Exclude Folder from build

\_Only Update tsconfig.json in your app directory
e.g: `exclude: ["src/pages/dev/*"]`
