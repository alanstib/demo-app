import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

enum FlipSide {
  BACK,
  FRONT,
}

enum RotateAxis {
  Y = "Y",
  X = "X",
}

type FlipCardProps = {
  perspective?: number;
  side: FlipSide;
  rotate?: RotateAxis;
  style?: ViewStyle;
  front: React.ReactElement;
  back: React.ReactElement;
};

const FlipCard = ({
  perspective = 1200,
  rotate = RotateAxis.Y,
  side,
  front,
  back,
  style,
}: FlipCardProps) => {
  const rotatePosition = interpolate(side, [0, 1], [180, 360]);

  const rotateValue = useDerivedValue(() =>
    withTiming(rotatePosition, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    }),
  );

  const rotationFlip = useDerivedValue(() => {
    if (rotate === RotateAxis.Y) {
      return {
        rotateY: `${rotateValue.value}deg`,
      };
    }

    return {
      rotateX: `${rotateValue.value}deg`,
    };
  }, [rotate, rotateValue]);

  const rotationFlipBack = useDerivedValue(() => {
    if (rotate === RotateAxis.Y) {
      return {
        rotateY: "180deg",
      };
    }

    return {
      rotateX: "180deg",
    };
  }, [rotate]);

  const opacityFront = useDerivedValue(
    () =>
      withTiming(side, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
    [side],
  );

  const opacityBack = useDerivedValue(
    () =>
      withTiming(side === 0 ? 1 : 0, {
        duration: 500,
        easing: Easing.inOut(Easing.ease),
      }),
    [side],
  );

  const animatedStyleFront = useAnimatedStyle(
    () => ({
      opacity: opacityFront.value,
      transform: [{ perspective }, { ...rotationFlip.value }],
    }),
    [rotate, side, rotationFlip],
  );

  const animatedStyleBack = useAnimatedStyle(
    () => ({
      opacity: opacityBack.value,
      transform: [
        { perspective },
        { ...rotationFlipBack.value },
        { ...rotationFlip.value },
      ],
    }),
    [rotate, side],
  );

  return (
    <Animated.View style={[style, styles.container]}>
      <Animated.View style={[styles.side, animatedStyleFront]}>{front}</Animated.View>
      <Animated.View style={[styles.side, animatedStyleBack]}>{back}</Animated.View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  side: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { FlipCard, FlipSide, RotateAxis };
