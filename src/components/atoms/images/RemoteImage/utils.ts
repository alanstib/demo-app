import { RemoteImageProps } from "./types";

const getDimensions = ({
  width,
  height,
  aspectRatio,
}: Pick<RemoteImageProps, "width" | "height" | "aspectRatio">): {
  width: number;
  height: number;
} => {
  if (typeof width === "number" && typeof aspectRatio === "number") {
    return { width, height: width / aspectRatio };
  }

  if (typeof height === "number" && typeof aspectRatio === "number") {
    return { height, width: height * aspectRatio };
  }

  if (typeof width === "number" && typeof height === "number") {
    return { width, height };
  }

  throw Error("This will never happen");
};

export { getDimensions };
