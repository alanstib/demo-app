import { ImageProps } from "react-native";

type PrefetchState = "initializing" | "loading" | "error" | "success";

type RemoteImageProps =
  | Omit<ImageProps, "source"> & {
      uri: string;
    } & (
        | {
            width: number;
            height: number;
            aspectRatio?: undefined;
          }
        | {
            width: number;
            height?: undefined;
            aspectRatio: number;
          }
        | {
            width?: undefined;
            height: number;
            aspectRatio: number;
          }
      );

export type { PrefetchState, RemoteImageProps };
