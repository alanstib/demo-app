import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { Header1 } from "components/atoms";
import { ScreenContainer, ScreenSubContainer } from "components/atoms/layout";
import { storybookTitles } from "storybook";
import { TransactionsBottomSheet } from "./TransactionsBottomSheet";

const meta: ComponentMeta<typeof TransactionsBottomSheet> = {
  title: storybookTitles.organisms,
  component: TransactionsBottomSheet,
};

const TransactionsBottomSheetStory: ComponentStory<
  typeof TransactionsBottomSheet
> = () => (
  <ScreenContainer backgroundColor={"$black"}>
    <ScreenSubContainer alignItems={"center"} justifyContent={"center"} flex={1}>
      {["Example", "Of", "Some", "Random", "Text"].map((text) => (
        <Header1 key={text} color={"$white"}>
          {text}
        </Header1>
      ))}
    </ScreenSubContainer>
    <TransactionsBottomSheet />
  </ScreenContainer>
);

TransactionsBottomSheetStory.storyName = "TransactionsBottomSheet";

export default meta;
export { TransactionsBottomSheetStory };
