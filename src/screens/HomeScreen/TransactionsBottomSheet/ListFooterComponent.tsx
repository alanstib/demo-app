import { ActivityIndicator } from "react-native";
import { YStack, Spacer } from "tamagui";
import { getColorValue } from "theme/utils";

type ListFooterComponentProps = {
  isFetchingMore: boolean;
};

const ListFooterComponent = ({ isFetchingMore }: ListFooterComponentProps) => (
  <YStack alignItems={"center"}>
    {isFetchingMore ? (
      <>
        <Spacer size={"$6"} />
        <ActivityIndicator color={getColorValue("white50")} size={"large"} />
      </>
    ) : null}
  </YStack>
);

export { ListFooterComponent };
