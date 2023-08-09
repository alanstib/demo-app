import { useMemo } from "react";
import { useImageDimensions } from "@react-native-community/hooks";
import { SpaceTokens } from "tamagui";
import { getPrefixedSpaceValue } from "theme/utils";
import { getImageSource } from "./utils";
import { BaseImageProps } from "./BaseImage";

type UseLocalImageDimensionsParams = Omit<BaseImageProps, "height" | "width"> & {
  height?: SpaceTokens;
  width?: SpaceTokens;
};

/**
 * @param {SpaceTokens} height - SpaceTokens
 * @param {SpaceTokens} width - SpaceTokens
 *
 * Pass in ONE OF height + width into `useLocalImageDimensions` to get the resulting calculated aspect ratio of the image.
 */
const useLocalImageDimensions = ({
  imageName,
  height,
  width,
}: UseLocalImageDimensionsParams) => {
  const imageSource = getImageSource(imageName);
  const aspectRatio = useImageDimensions(imageSource).dimensions?.aspectRatio;

  if (height !== undefined && width !== undefined) {
    console.warn(
      "Both height and width were passed into useLocalImageDimensions. Only pass in one of the two. Defaulting to using 'width'.",
    );
  }

  if (height === undefined && width === undefined) {
    console.warn(
      "Both height and width are undefined in `useLocalImageDimensions`. Must pass in one! Returning undefined.",
    );
  }

  return useMemo(() => {
    if (!aspectRatio) {
      return undefined;
    }

    if (height === undefined && width === undefined) {
      return undefined;
    }

    if (width !== undefined) {
      const aspectWidth =
        typeof width === "number" ? width : getPrefixedSpaceValue(width);

      return {
        aspectWidth,
        aspectHeight: aspectWidth / aspectRatio,
      };
    }

    if (height !== undefined) {
      const aspectHeight =
        typeof height === "number" ? height : getPrefixedSpaceValue(height);

      return {
        aspectWidth: aspectHeight * aspectRatio,
        aspectHeight,
      };
    }

    return undefined;
  }, [aspectRatio, height, width]);
};

export { useLocalImageDimensions };
export type { UseLocalImageDimensionsParams };
