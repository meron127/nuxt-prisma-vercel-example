## Problem
(Adding prisma items)  
The project works fine in local development, but in vercel deployment, the web is crashed with this error show in logs.  
![nuxt-prisma-vercel-example_error](https://user-images.githubusercontent.com/85394063/216226695-c83d9b01-b68b-45b5-b5b4-bfd266a35502.png)

## Solution
Probably find out the solution when reading the [nitro doc](https://nitro.unjs.io/deploy/providers/vercel) accidentally.  
The default setting of deployment preset is 'vercel-edge' in the nuxt template provided in vercel.  
However, my codes are not using prisma with data proxy (not edge function approach).  
After changing deployment preset to 'vercel', it is able to see the homepage and call the api to fetch data from Supabase with prisma.  
  
Ref: [solution branch](https://github.com/meron127/nuxt-prisma-vercel-example/tree/solution)

Below is original from nuxt template

---

# Nuxt Example

Deploy your [Nuxt](https://nuxt.com) project to Vercel with zero configuration.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/vercel/tree/main/examples/nuxtjs&template=nuxtjs)

_Live Example: https://nuxtjs-template.vercel.app_

Look at the [Nuxt 3 documentation](https://v3.nuxtjs.org) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/guide/deploy/presets) for more information.
