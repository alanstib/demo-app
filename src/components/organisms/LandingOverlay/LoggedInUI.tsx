import { useEffect } from "react";
import { StyleSheet } from "react-native";
import { ScreenSubContainer, Body1, Header2 } from "components/atoms";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import LottieView from "lottie-react-native";
import { Spacer } from "tamagui";
import { formatUTCString } from "utils";
import { useAppLoadStore } from "services/zustand";
import { shallow } from "zustand/shallow";

const TIME_TO_SHOW_EMPLOYEE_START_DATE = 1500;

type LoggedInUIProps = {
  employmentStartDate: string;
};

const styles = StyleSheet.create({
  animatedView: { flex: 1, zIndex: 100, ...StyleSheet.absoluteFillObject },
});

const LoggedInUI = ({ employmentStartDate }: LoggedInUIProps) => {
  const {
    isInitialAnimationPlaying,
    setIsInitialAnimationPlayingFalse,
    setIsLoggedInUIShowingFalse,
  } = useAppLoadStore(
    (state) => ({
      setIsInitialAnimationPlayingFalse: state.setIsInitialAnimationPlayingFalse,
      setIsLoggedInUIShowingFalse: state.setIsLoggedInUIShowingFalse,
      isInitialAnimationPlaying: state.isInitialAnimationPlaying,
    }),
    shallow,
  );

  useEffect(() => {
    if (isInitialAnimationPlaying) {
      return;
    }

    const timeout = setTimeout(
      setIsLoggedInUIShowingFalse,
      TIME_TO_SHOW_EMPLOYEE_START_DATE,
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [isInitialAnimationPlaying, setIsLoggedInUIShowingFalse]);

  return (
    <Animated.View exiting={FadeOut} style={styles.animatedView}>
      <LottieView
        source={require("../../../assets/animations/lottie-logged-in.json")}
        autoPlay={true}
        loop={false}
        onAnimationFinish={setIsInitialAnimationPlayingFalse}
      />
      {isInitialAnimationPlaying ? null : (
        <Animated.View entering={FadeIn} style={styles.animatedView}>
          <ScreenSubContainer flex={1} alignItems={"center"} justifyContent={"center"}>
            <Body1 color={"$white"}>{"Employee Since"}</Body1>
            <Spacer size={"$2"} />
            <Header2 color={"$white"}>
              {formatUTCString(employmentStartDate, "yyyy")}
            </Header2>
          </ScreenSubContainer>
        </Animated.View>
      )}
    </Animated.View>
  );
};

export { LoggedInUI };
