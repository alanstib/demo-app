import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useGetEmploymentStartDateQuery } from "services/graphql/generated";
import { useIsEntireAnimationFinished } from "services/zustand";
import { useHideSplashScreen } from "./hooks";
import { LoggedInUI } from "./LoggedInUI";

SplashScreen.preventAutoHideAsync();

const styles = StyleSheet.create({
  landingOverlaySafeArea: {
    zIndex: 100,
  },
});

const safeAreaStyle = [StyleSheet.absoluteFill, styles.landingOverlaySafeArea];

const LandingOverlay = () => {
  useHideSplashScreen();

  const isLoggedIn = true;

  const isEntireAnimationFinished = useIsEntireAnimationFinished();
  const { data } = useGetEmploymentStartDateQuery({
    fetchPolicy: "cache-first",
    skip: !isLoggedIn,
  });

  const employmentStartDate =
    data?.cardholder?.__typename === "QueryCardholderSuccess"
      ? data.cardholder.data.employmentStartDate
      : undefined;

  if (!isEntireAnimationFinished && employmentStartDate) {
    return (
      <SafeAreaProvider style={safeAreaStyle}>
        <LoggedInUI employmentStartDate={employmentStartDate} />
      </SafeAreaProvider>
    );
  }

  return null;
};

export { LandingOverlay };
