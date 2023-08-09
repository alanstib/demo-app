import { Icon } from "components/atoms/images";
import { Spacer } from "tamagui";
import { BaseInputWithTheme, BaseInputWithThemeProps } from "../BaseInputWithTheme";

type SearchInputProps = Omit<BaseInputWithThemeProps, "LeftComponent" | "placeholder">;

const SearchInput = (props: SearchInputProps) => (
  <BaseInputWithTheme
    {...props}
    borderWidth={0}
    placeholder={"Search"}
    LeftComponent={
      <>
        <Icon iconName={"search"} width={16} tintColor={"white50"} />
        <Spacer width={"$6"} />
      </>
    }
  />
);

export { SearchInput };
