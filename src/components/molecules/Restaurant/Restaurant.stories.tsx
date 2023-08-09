import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { storybookTitles } from "storybook";
import { YStack } from "tamagui";
import { Restaurant } from "./Restaurant";
import { RestaurantLoadingPlaceholder } from "./RestaurantLoadingPlaceholder";

const DUMMY_IMAGE_URI =
  "https://img.asmedia.epimg.net/resizer/ERBanIhCClIaEAS3G390_kEE4ws=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YHW7IZCMJ5NHFDCYEQEMSFIEFY.jpg";

const meta: ComponentMeta<typeof Restaurant> = {
  title: storybookTitles.molecules,
  component: Restaurant,
};

const RestaurantStory: ComponentStory<typeof Restaurant> = () => (
  <YStack space={"$7"}>
    <RestaurantLoadingPlaceholder />
    <Restaurant
      imageUri={DUMMY_IMAGE_URI}
      title={"Au Cheval"}
      subtitle={"Soho"}
      onPress={() => {}}
    />
  </YStack>
);

RestaurantStory.storyName = "Restaurant";

export default meta;
export { RestaurantStory };
