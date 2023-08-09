import { PlaceholderLine } from "rn-placeholder";
import { PlaceholderLineProps } from "rn-placeholder/lib/PlaceholderLine";
import { getFontSize, styled } from "tamagui";
import { getColorValue } from "theme/utils";

type PlaceholderTextProps = Omit<PlaceholderLineProps, "noMargin" | "height" | "color">;

type BasePlaceholderLineProps = Omit<PlaceholderLineProps, "noMargin" | "color"> & {
  color?: Parameters<typeof getColorValue>[0];
};

const UnstyledBasePlaceholderLine = ({
  color = "figmaBackground",
  ...props
}: BasePlaceholderLineProps) => (
  <PlaceholderLine {...props} color={getColorValue(color)} />
);

const BasePlaceholderLine = styled(UnstyledBasePlaceholderLine, {});

const Body1PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$3")} />
);

const Body2PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$2")} />
);

const Body3PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$1")} />
);

const Header1PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$7")} />
);

const Header2PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$6")} />
);

const Header3PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$5")} />
);

const Header4PlaceholderText = (props: PlaceholderTextProps) => (
  <BasePlaceholderLine {...props} height={1.1 * getFontSize("$4")} />
);

const PlaceholderTexts = {
  Body1: Body1PlaceholderText,
  Body2: Body2PlaceholderText,
  Body3: Body3PlaceholderText,
  Header1: Header1PlaceholderText,
  Header2: Header2PlaceholderText,
  Header3: Header3PlaceholderText,
  Header4: Header4PlaceholderText,
};

export { PlaceholderTexts, BasePlaceholderLine };
