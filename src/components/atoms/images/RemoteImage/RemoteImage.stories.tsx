import { ComponentMeta, ComponentStory } from "@storybook/react-native";
import { ScreenContainer, ScreenSubContainer } from "components/atoms/layout";
import { storybookTitles } from "storybook";
import { RemoteImage } from "./RemoteImage";

const meta: ComponentMeta<typeof RemoteImage> = {
  title: storybookTitles.atoms,
  component: RemoteImage,
};

const DUMMY_IMAGE_URI =
  "https://img.asmedia.epimg.net/resizer/ERBanIhCClIaEAS3G390_kEE4ws=/736x414/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/YHW7IZCMJ5NHFDCYEQEMSFIEFY.jpg";

const RemoteImageStory: ComponentStory<typeof RemoteImage> = () => (
  <ScreenContainer backgroundColor={"$white"}>
    <ScreenSubContainer flex={1} alignItems={"center"} justifyContent={"center"}>
      <RemoteImage
        resizeMode={"contain"}
        width={250}
        height={150}
        uri={DUMMY_IMAGE_URI}
      />
    </ScreenSubContainer>
  </ScreenContainer>
);

RemoteImageStory.storyName = "RemoteImage";

export default meta;
export { RemoteImageStory };
