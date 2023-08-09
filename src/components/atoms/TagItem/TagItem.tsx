import { ComponentProps } from "react";
import { Stack } from "tamagui";
import { Body1 } from "../texts";

type TagItemProps = Pick<ComponentProps<typeof Body1>, "children">;

const TagItem = ({ children }: TagItemProps) => (
  <Stack
    backgroundColor={"$white5"}
    justifyContent={"center"}
    alignItems={"center"}
    paddingHorizontal={"$5"}
    paddingVertical={"$4"}
    borderRadius={"$1"}
  >
    <Body1 size={"$1"} color={"$white50"}>
      {children}
    </Body1>
  </Stack>
);

export { TagItem };
