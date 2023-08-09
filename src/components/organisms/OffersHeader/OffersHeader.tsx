import { useNavigation } from "@react-navigation/native";
import { Body1, Caption, Touchable } from "components/atoms";
import { OfferCategory } from "services/graphql/generated";
import { XStack } from "tamagui";

type OffersHeaderProps = {
  category: OfferCategory;
};

const OffersHeader = ({ category }: OffersHeaderProps) => {
  const navigation = useNavigation();

  return (
    <XStack justifyContent={"space-between"} alignItems={"center"}>
      <Body1 fontWeight={"600"} color={"$white"}>
        {"Perks"}
      </Body1>

      <Touchable onPress={() => navigation.navigate("OffersListScreen", { category })}>
        <Caption size={"$1"} fontWeight={"600"} color={"$white70"}>
          {"VIEW MORE"}
        </Caption>
      </Touchable>
    </XStack>
  );
};

export { OffersHeader };
