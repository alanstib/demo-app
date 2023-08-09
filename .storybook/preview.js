import { TamaguiThemeProvider } from "components/providers/TamaguiThemeProvider";

const decorators = [
  (Story) => (
    <TamaguiThemeProvider>
      <Story />
    </TamaguiThemeProvider>
  ),
];
const parameters = {
  options: {
    storySort: {
      order: ["atoms", "molecules", "organisms"],
    },
  },
};

export { decorators, parameters };
