import { Fragment, useMemo } from "react";
import { Body1, Icon, SolidDivider, Touchable } from "components/atoms";
import { SizeTokens, YStack } from "tamagui";
import { useBooleanState, useLayoutAnimationOnChange } from "utils/hooks";
import { DropDownListProps } from "./types";
import { ListItem } from "./ListItem";

const getPaddings = (index: number, ogArray: unknown[]) => {
  const paddingTop: SizeTokens | undefined = index === 0 ? undefined : "$1";
  const paddingBottom: SizeTokens | undefined =
    index === ogArray.length - 1 ? undefined : "$1";

  return {
    paddingTop,
    paddingBottom,
  };
};

const DropDownList = <Id extends string>({
  onListItemPress,
  data,
  dividingIndex,
  numItemsAboveTheFold,
}: DropDownListProps<Id>) => {
  const { state: isShowingMore, toggleState: toggleIsShowingMore } =
    useBooleanState(false);

  const first5Items = useMemo(
    () => data.slice(0, numItemsAboveTheFold),
    [data, numItemsAboveTheFold],
  );
  const restOfItems = useMemo(
    () => data.slice(numItemsAboveTheFold),
    [data, numItemsAboveTheFold],
  );
  const hasMore = data.length > first5Items.length;

  useLayoutAnimationOnChange(isShowingMore);

  return (
    <YStack borderRadius={"$2"} padding={"$5"} backgroundColor={"$white5"}>
      {first5Items.map((item, index, ogArray) => {
        const { paddingTop, paddingBottom } = getPaddings(index, ogArray);

        if (index === dividingIndex) {
          return (
            <Fragment key={item.id}>
              <YStack paddingTop={paddingTop} paddingBottom={paddingBottom}>
                <ListItem onPress={onListItemPress} key={item.id} {...item} />
              </YStack>
              <YStack padding={"$4"}>
                <SolidDivider />
              </YStack>
            </Fragment>
          );
        }

        return (
          <YStack key={item.id} paddingTop={paddingTop} paddingBottom={paddingBottom}>
            <ListItem onPress={onListItemPress} key={item.id} {...item} />
          </YStack>
        );
      })}
      {hasMore ? (
        <Touchable
          width={"$full"}
          padding={"$4"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          onPress={toggleIsShowingMore}
        >
          <Body1 color={"$white"}>{isShowingMore ? "Less" : "More"}</Body1>
          <Icon
            rotateX={isShowingMore ? "180deg" : undefined}
            iconName={"chevron-down"}
            width={10}
          />
        </Touchable>
      ) : null}
      {isShowingMore
        ? restOfItems.map((item, index, ogArray) => {
            const { paddingTop, paddingBottom } = getPaddings(index, ogArray);

            return (
              <YStack key={item.id} paddingTop={paddingTop} paddingBottom={paddingBottom}>
                <ListItem onPress={onListItemPress} key={item.id} {...item} />
              </YStack>
            );
          })
        : null}
    </YStack>
  );
};

export { DropDownList };
export type { DropDownListProps };
