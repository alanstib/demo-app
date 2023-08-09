import { Dimensions, StyleSheet } from "react-native";
import { Video, InterruptionModeAndroid, InterruptionModeIOS, Audio } from "expo-av";
import { getSpaceValue } from "theme/utils";
import { useIsFocused } from "@react-navigation/native";

const WINDOW_WIDTH = Dimensions.get("window").width;

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    zIndex: 0,
    top: getSpaceValue(15),
    width: WINDOW_WIDTH,
    height: WINDOW_WIDTH / (16 / 9),
  },
});

Audio.setAudioModeAsync({
  playsInSilentModeIOS: true,
  allowsRecordingIOS: false,
  interruptionModeIOS: InterruptionModeIOS.DuckOthers,
  interruptionModeAndroid: InterruptionModeAndroid.DuckOthers,
  shouldDuckAndroid: false,
  staysActiveInBackground: true,
});

const GlassVideo = () => {
  const isFocused = useIsFocused();

  return (
    <Video
      style={styles.video}
      source={require("../../assets/videos/files/glass-animation.mp4")}
      shouldPlay={isFocused}
      isLooping={true}
      isMuted={true}
    />
  );
};

export { GlassVideo };
