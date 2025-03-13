# SUS UI Library

A UI component library for Stowarzyszenie Umarłych Statutów, built with SvelteKit.

## Install into another project

To use this library, install the package:

```bash
yarn add @sus-org-pl/ui
```

## Usage in project

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

## Commit Convention

We use Conventional Commits for all commit messages. This helps maintain a standardized commit history and facilitates automated versioning and changelog generation.

## Publishing

Ensure you are authenticated with GitHub's NPM registry and publish the package:

```bash
yarn release
```

## Authors

- Mateusz Rojek (@thismrojek) from Stowarzyszenie Umarłych Statutów, as Software Engineer
- Kacper Szewczyk from Stowarzyszenie Umarłych Statutów, as Product Designer
