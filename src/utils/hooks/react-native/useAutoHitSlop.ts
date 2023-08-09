import { useState, useCallback } from "react";
import { LayoutChangeEvent } from "react-native";

type FrameSize = { x: number; y: number };

const MIN_WIDTH = 44;
const MIN_HEIGHT = 44;

const getHitSlop = ({ x, y }: FrameSize) => {
  const additionalWidth = x && x < MIN_WIDTH ? MIN_WIDTH - x : 0;
  const additionalHeight = y && y < MIN_HEIGHT ? MIN_HEIGHT - y : 0;

  if (additionalWidth === 0 && additionalHeight === 0) {
    return undefined;
  }

  return {
    top: additionalHeight / 2,
    right: additionalWidth / 2,
    bottom: additionalHeight / 2,
    left: additionalWidth / 2,
  };
};

const useAutoHitSlop = () => {
  const [frameSize, setFrameSize] = useState<FrameSize>({ x: 0, y: 0 });

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      const {
        nativeEvent: { layout },
      } = event;

      if (layout.width !== frameSize.x && layout.height !== frameSize.y) {
        setFrameSize({ x: layout.width, y: layout.height });
      }
    },
    [frameSize],
  );

  return [getHitSlop(frameSize), onLayout] as const;
};

export { useAutoHitSlop };
