import { useCallback } from "react";
import { FlatList, FlatListProps } from "react-native";
import { Spacer } from "tamagui";
import { DataTag, DataTagProps } from "./DataTag";

type DataTagItem<Id> = Pick<DataTagProps<Id>, "id" | "text">;
type RenderItemParameters<Id> = Parameters<
  NonNullable<FlatListProps<DataTagItem<Id>>["renderItem"]>
>[0];

type DataTagListProps<Id> = {
  data: DataTagItem<Id>[];
  onPress: DataTagProps<Id>["onPress"];
};

const ListHeaderAndFooter = () => <Spacer width={"$6"} />;
const ItemSeparatorComponent = () => <Spacer width={"$4"} />;

const DataTagList = <Id,>({ data, onPress }: DataTagListProps<Id>) => {
  const renderItem = useCallback(
    ({ item }: RenderItemParameters<Id>) => <DataTag {...item} onPress={onPress} />,
    [onPress],
  );

  return (
    <FlatList
      renderItem={renderItem}
      data={data}
      horizontal={true}
      ListHeaderComponent={ListHeaderAndFooter}
      ListFooterComponent={ListHeaderAndFooter}
      ItemSeparatorComponent={ItemSeparatorComponent}
    />
  );
};

export { DataTagList };
