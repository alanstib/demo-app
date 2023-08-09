import { Body1, Header3 } from "components/atoms";
import { SecondaryButton } from "components/molecules/buttons";
import { Spacer, YStack } from "tamagui";

type ErrorUIProps = {
  handleTryAgain: () => void;
  bodyText: string;
};

const ErrorUI = ({ handleTryAgain, bodyText }: ErrorUIProps) => (
  <YStack justifyContent={"center"} alignItems={"center"} flex={1}>
    <Header3 color={"$white"}>{"Whoops!"}</Header3>
    <Spacer size={"$7"} />
    <Body1 color={"$white50"}>{bodyText}</Body1>
    <Body1 color={"$white50"}>{"Tap below to try again."}</Body1>
    <Spacer size={"$7"} />
    <SecondaryButton onPress={handleTryAgain} color={"$white50"}>
      {"Try again"}
    </SecondaryButton>
  </YStack>
);

export { ErrorUI };
