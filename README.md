# SUS UI Library

A UI component library for Stowarzyszenie Umarłych Statutów, built with SvelteKit.

## Install into another project

To use this library, you need to authenticate with GitHub's NPM registry. Add the following to your project's .npmrc file:

```
@sus-org-pl:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${SUS_REGISTRY_TOKEN}
```

Then, install the package:

```bash
yarn add @sus-org-pl/ui
```

## Usage in another project

Import components into your SvelteKit project:

```svelte
<script>
  import { Button } from '@sus-org-pl/ui';
</script>

<Button
    action={() => console.log("I'm clicked!")}
    variant="filled"
    color="white"
    size="small"
>
    Click me!
</Button>
```

## Development

To contribute to the library, clone the repository and install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn storybook
```

## Publishing

Ensure you are authenticated with GitHub's NPM registry and publish the package:

```bash
yarn release
```

## Authors

- Mateusz Rojek (@thismrojek) from Stowarzyszenie Umarłych Statutów, as Software Engineer
- Kacper Szewczyk from Stowarzyszenie Umarłych Statutów, as Product Designer
