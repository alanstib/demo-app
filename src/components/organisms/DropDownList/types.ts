type DropDownListItem<Id extends string> = {
  id: Id;
  text: string;
  isSelected: boolean;
};

type DropDownListProps<Id extends string> = {
  data: DropDownListItem<Id>[];
  onListItemPress: (id: Id) => void;
  dividingIndex: number;
  numItemsAboveTheFold: number;
};

type ListItemProps<Id extends string> = DropDownListItem<Id> & {
  onPress: DropDownListProps<Id>["onListItemPress"];
  isSelected: boolean;
};

export type { DropDownListItem, DropDownListProps, ListItemProps };
