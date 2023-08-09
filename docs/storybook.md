# Storybook

[Storybook](https://storybook.js.org/) touts itself as a "frontend workshop for building UI components and pages in isolation". This is exactly what we'll be using it for.

[Storybook for React Native](https://storybook.js.org/tutorials/intro-to-storybook/react-native/en/get-started/) is mostly the same as Storybook for Web, though it's usually a bit behind; notably, the Web GUI and on-device UI aren't perfect. It's still useful, though, to quickly build UIs, mocking out their variants, and enable quick access to specific flows.

## Running Storybook

In [RootStackNavigator](../src/navigation/RootStackNavigator/RootStackNavigator.tsx), change the `RENDER_STORYBOOK` constant to be `true`.

Then:

- `yarn storybook:get-stories`: automatically generates `storybook.requires.js` from all `src/*.stories.tsx` files
- `yarn storybook:start`: does the same, and also watches for changes to all existing `src/*.stories.tsx` files and automatically updates based on changes; note, any _new_ `*.stories` files crated _after_ running this script will not be visible until reloaing the app

## Writing Stories

There are a couple vscode snippets added to this VSCode workspace:

- `storybook-template`
- `storybook-template_multi`

Refer to [SampleComponent.stories.tsx](../src/components/atoms/SampleComponent/SampleComponent.stories.tsx) for a simple example of a singular story.

The intention of `storybook-template_multi` is to setup [Component Story Format](https://storybook.js.org/docs/react/api/csf) boilerplate for a Component's story with props that can be dynamically configured via Storybook's on-device UI. [Here's an example in the Storybook docs](https://storybook.js.org/docs/react/api/csf#play-function). Examples in this project will follow.

## Developing With Storybook

1. Make your `*.stories.tsx` file if it doesn't yet exist with one of the snippets.
2. Run `yarn storybook:start` and, in a separate terminal, `yarn start`.
3. Develop UI as usual, in an isolated environment. The Storybook UI will be on-device only; there's currently no Web UI for `@storybook/react-native` in the 6.0.1 beta.

As the app grows, considerations around how to integrate Storybook with components requiring aspects of navigation, authentication, the theme provider, and more will be made.
