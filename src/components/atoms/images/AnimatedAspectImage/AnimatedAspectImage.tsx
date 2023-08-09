import { useMemo } from "react";
import Animated from "react-native-reanimated";
import { GetProps } from "tamagui";
import { useLocalImageDimensions, UseLocalImageDimensionsParams } from "../hooks";
import { getImageSource } from "../utils";

type AnimatedImageProps = GetProps<typeof Animated.Image>;

type AnimatedAspectImageProps = Omit<AnimatedImageProps, "source"> &
  UseLocalImageDimensionsParams;

const AnimatedAspectImage = ({
  imageName,
  width,
  height,
  style,
  ...props
}: AnimatedAspectImageProps) => {
  const source = getImageSource(imageName);
  const maybeAspectDimensions = useLocalImageDimensions({
    imageName,
    width,
    height,
  });

  const derivedStyle = useMemo(
    () => ({
      width: maybeAspectDimensions?.aspectWidth,
      height: maybeAspectDimensions?.aspectHeight,
    }),
    [maybeAspectDimensions?.aspectHeight, maybeAspectDimensions?.aspectWidth],
  );

  const finalStyle = useMemo(() => [style, derivedStyle], [derivedStyle, style]);

  if (!maybeAspectDimensions) {
    return null;
  }

  return <Animated.Image {...props} source={source} style={finalStyle} />;
};

export { AnimatedAspectImage };
