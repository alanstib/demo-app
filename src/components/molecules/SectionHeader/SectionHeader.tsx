import { Body1, Caption, Touchable } from "components/atoms";
import { XStack } from "tamagui";

type SectionHeaderProps = {
  leftText: string;
  rightText?: string;
  rightOnPress: () => void;
};

const SectionHeader = ({
  leftText,
  rightText = "VIEW MORE",
  rightOnPress,
}: SectionHeaderProps) => (
  <XStack justifyContent={"space-between"} alignItems={"center"}>
    <Body1 fontWeight={"600"} color={"$white"}>
      {leftText}
    </Body1>

    <Touchable onPress={rightOnPress}>
      <Caption size={"$1"} fontWeight={"600"} color={"$white70"}>
        {rightText}
      </Caption>
    </Touchable>
  </XStack>
);

export { SectionHeader };
