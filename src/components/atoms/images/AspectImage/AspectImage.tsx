import { ImageProps } from "tamagui";
import { BaseImage } from "../BaseImage";
import { useLocalImageDimensions, UseLocalImageDimensionsParams } from "../hooks";

type AspectImageProps = Omit<ImageProps, "src" | "width" | "height"> &
  UseLocalImageDimensionsParams;

const AspectImage = ({ imageName, width, height, ...props }: AspectImageProps) => {
  const maybeAspectDimensions = useLocalImageDimensions({
    imageName,
    width,
    height,
  });

  if (!maybeAspectDimensions) {
    return null;
  }

  return (
    <BaseImage
      {...props}
      width={maybeAspectDimensions.aspectWidth}
      height={maybeAspectDimensions.aspectHeight}
      imageName={imageName}
    />
  );
};

export { AspectImage };
export type { AspectImageProps };
