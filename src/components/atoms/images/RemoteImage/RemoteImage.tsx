import React, { useCallback, useMemo } from "react";
import { ImageStyle, StyleProp } from "react-native";
import { Placeholder, PlaceholderMedia, Fade } from "rn-placeholder";
import Animated, { useSharedValue, FadeIn, FadeOut } from "react-native-reanimated";
import { useIsMounted } from "utils/hooks";
import { Icon } from "../Icon";
import { PrefetchState, RemoteImageProps } from "./types";
import { useInitializeImageState, useLoadImage } from "./hooks";
import { getDimensions } from "./utils";

const RemoteImage = ({
  width: widthProp,
  height: heightProp,
  style: styleProp,
  uri,
  aspectRatio,
  ...rest
}: RemoteImageProps) => {
  const isMounted = useIsMounted();
  const [prefetchState, setPrefetchState] = useInitializeImageState();

  const { width, height } = getDimensions({
    width: widthProp,
    height: heightProp,
    aspectRatio,
  });

  const scale = useSharedValue(0);
  const style: StyleProp<ImageStyle> = useMemo(
    () => [{ width, height }, styleProp],
    [width, height, styleProp],
  );
  const source = useMemo(
    () => ({
      uri,
    }),
    [uri],
  );

  const handleImagePrefetchState = useCallback(
    (state: PrefetchState) => {
      if (isMounted.current) {
        scale.value = 1;
        setPrefetchState(state);
      }
    },
    [isMounted, scale, setPrefetchState],
  );

  useLoadImage(uri, handleImagePrefetchState);

  if (prefetchState === "initializing") {
    return null;
  }

  // if image uri has not been prefetched, show placeholder automatically
  if (prefetchState === "loading") {
    return (
      <Animated.View
        entering={FadeIn.duration(150).springify()}
        exiting={FadeOut.duration(250)}
      >
        <Placeholder Animation={Fade}>
          <PlaceholderMedia style={style} />
        </Placeholder>
      </Animated.View>
    );
  }

  if (prefetchState === "error") {
    return <Icon width={width} iconName={"search"} resizeMode={"contain"} />;
  }

  // otherwise, return animated image that scales up upon being rendered
  return (
    <Animated.Image
      {...rest}
      source={source}
      style={style}
      entering={FadeIn.duration(250).springify()}
    />
  );
};

export { RemoteImage };
