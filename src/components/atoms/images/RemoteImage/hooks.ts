import { useEffect, useState } from "react";
import { Image as RNImage } from "react-native";
import { useIsMounted } from "utils/hooks";
import { PrefetchState, RemoteImageProps } from "./types";

const DELAY_TO_SHOW_LOADING_MS = 100;

const useInitializeImageState = () => {
  const isMounted = useIsMounted();
  const [prefetchState, setPrefetchState] = useState<PrefetchState>("initializing");

  useEffect(() => {
    let imageLoadingStateTimeout: NodeJS.Timeout | null = null;

    // We render `null` when the `prefetchState` 'initializing'
    // So, we want to add a small artificial delay to wait and see if the image uri is cached (retrieving cache information is an async operation via `await RNImage.queryCache`)
    // 100ms is long enough that, if the image is cached, it will scale up almost immediately
    // If it's not cached, the placeholder box will fade in almost immediately, then scale down when the Image finishes loading and scales up
    if (prefetchState === "initializing") {
      imageLoadingStateTimeout = setTimeout(() => {
        if (isMounted.current) {
          setPrefetchState("loading");
        }
      }, DELAY_TO_SHOW_LOADING_MS);
    }

    if (prefetchState === "success" && imageLoadingStateTimeout) {
      clearTimeout(imageLoadingStateTimeout);
    }

    return () => {
      if (imageLoadingStateTimeout) {
        clearTimeout(imageLoadingStateTimeout);
      }
    };
  }, [isMounted, prefetchState]);

  return [prefetchState, setPrefetchState] as const;
};

const useLoadImage = (
  uri: RemoteImageProps["uri"],
  handleImagePrefetchState: (prefetchState: PrefetchState) => void,
) => {
  useEffect(() => {
    const maybeLoadImage = async () => {
      try {
        // first, check the query cache for the uri

        if (RNImage.queryCache) {
          const imageCacheInfo = await RNImage.queryCache([uri]);

          if (Object.keys(imageCacheInfo).length) {
            handleImagePrefetchState("success");
            return;
          }
        }

        // prefetch image uri and mark local state as loaded
        await RNImage.prefetch(uri);
        handleImagePrefetchState("success");
      } catch (error) {
        handleImagePrefetchState("error");
      }
    };

    if (process.env.NODE_ENV !== "test") {
      maybeLoadImage();
    }
  }, [uri, handleImagePrefetchState]);
};

export { useLoadImage, useInitializeImageState };
