import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { TransactionDetailScreen } from "./TransactionDetailScreen";

const meta: ComponentMeta<typeof TransactionDetailScreen> = {
  title: storybookTitles.screens,
  component: TransactionDetailScreen,
};

const TransactionDetailScreenStory: ComponentStory<
  typeof TransactionDetailScreen
> = () => (
  <TransactionDetailScreen
    // @ts-ignore
    route={{
      params: {
        transactionId: 176,
      },
    }}
  />
);

TransactionDetailScreenStory.storyName = "TransactionDetailScreen";

export default meta;
export { TransactionDetailScreenStory };
