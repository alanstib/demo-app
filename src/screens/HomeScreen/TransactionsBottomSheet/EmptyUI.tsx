import { Body1, Icon, ScreenSubContainer } from "components/atoms";
import { Spacer } from "tamagui";
import { FilterData } from "./constants";

type EmptyUIProps = {
  selectedFilters: FilterData;
  searchTextForQuery: string;
};

const EmptyUI = ({ selectedFilters, searchTextForQuery }: EmptyUIProps) => (
  <ScreenSubContainer alignItems={"center"} padding={"$8"}>
    <Icon tintColor={"white70"} iconName={"credit-card"} width={20} />
    <Spacer size={"$4"} />
    <Body1 paddingHorizontal={"$10"} textAlign={"center"} color={"$white70"}>
      {searchTextForQuery.length
        ? "No search results found."
        : selectedFilters.length
        ? "No transactions matching the selected filters could be found."
        : "Make a purchase to see your transactions here."}
    </Body1>
  </ScreenSubContainer>
);

export { EmptyUI };
