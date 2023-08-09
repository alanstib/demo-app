import { useMemo } from "react";
import { StyleSheet } from "react-native";
import { Image, ImageProps } from "tamagui";
import { ImageName } from "assets/images";
import { ColorName } from "theme/tokens/color";
import { getColorValue } from "theme/utils";
import { getImageSource } from "../utils";

type BaseImageProps = Omit<ImageProps, "src"> & {
  imageName: ImageName;
  tintColor?: ColorName;
};

const BaseImage = ({
  imageName,
  tintColor,
  style: styleProp,
  ...props
}: BaseImageProps) => {
  const src = getImageSource(imageName);
  const style = useMemo(() => {
    if (tintColor) {
      return StyleSheet.flatten([styleProp, { tintColor: getColorValue(tintColor) }]);
    }

    return styleProp;
  }, [tintColor, styleProp]);

  //@ts-ignore
  return <Image {...props} style={style} src={src} />;
};

export { BaseImage };
export type { BaseImageProps };
