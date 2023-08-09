import { useMemo } from "react";
import { ImageStyle, StyleProp } from "react-native";
import { Image, ImageProps } from "tamagui";
import { IconName, Icons } from "assets/icons";
import { getColorValue } from "theme/utils";
import { ColorName } from "theme/tokens/color";
import { useImageDimensions } from "@react-native-community/hooks";
import { useLayoutAnimationOnChange } from "utils";

type IconProps = Omit<ImageProps, "src" | "style" | "width" | "height"> & {
  iconName: IconName;
  tintColor?: ColorName;
} & ({ height: number; width?: undefined } | { height?: undefined; width: number });

const Icon = ({ iconName, tintColor, ...props }: IconProps) => {
  const style: StyleProp<ImageStyle> = useMemo(() => {
    if (tintColor) {
      return { tintColor: getColorValue(tintColor) };
    }

    return undefined;
  }, [tintColor]);

  const src = Icons[iconName];
  const { dimensions } = useImageDimensions(src);
  const aspectRatio = dimensions?.aspectRatio;

  useLayoutAnimationOnChange(aspectRatio);

  if (!aspectRatio) {
    return null;
  }

  let iconWidthOrHeight: number;

  if (props.width !== undefined) {
    iconWidthOrHeight = props.width / aspectRatio;
  } else {
    iconWidthOrHeight = props.height * aspectRatio;
  }

  return (
    <Image
      {...props}
      width={props.width ?? iconWidthOrHeight}
      height={props.height ?? iconWidthOrHeight}
      src={src}
      style={style}
    />
  );
};

export { Icon };
