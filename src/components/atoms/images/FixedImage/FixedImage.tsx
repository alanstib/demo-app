import { useWindowDimensions } from "tamagui";
import { AspectImage, AspectImageProps } from "../AspectImage";

type FixedImageProps = Pick<AspectImageProps, "top" | "bottom" | "zIndex" | "imageName">;

const FixedImage = ({ imageName, top, bottom, ...props }: FixedImageProps) => {
  const { width: windowWidth } = useWindowDimensions();

  return (
    <AspectImage
      {...props}
      imageName={imageName}
      position={"absolute"}
      top={top}
      bottom={bottom}
      width={windowWidth}
      zIndex={0}
    />
  );
};

export { FixedImage };
