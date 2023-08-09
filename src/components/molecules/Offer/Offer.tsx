import { Body1, Body2, RemoteImage, Touchable } from "components/atoms";
import { Spacer } from "tamagui";
import { useOfferDimensions } from "./hooks";

type OfferProps = {
  imageSrc: string;
  title: string;
  subtitle: string;
  onPress?: () => void;
};

const Offer = ({ imageSrc, title, subtitle, onPress }: OfferProps) => {
  const offerDimensions = useOfferDimensions();

  return (
    <Touchable
      backgroundColor={"$white10"}
      borderRadius={"$2"}
      padding={"$6"}
      width={offerDimensions}
      minHeight={offerDimensions}
      onPress={onPress}
    >
      <RemoteImage
        resizeMode={"contain"}
        width={40}
        height={40}
        borderRadius={2}
        uri={imageSrc}
      />
      <Spacer size={"$5"} />
      <Body1 color={"$white"}>{title}</Body1>
      <Spacer size={"$1"} />
      <Body2 color={"$white50"}>{subtitle}</Body2>
    </Touchable>
  );
};

export { Offer };
