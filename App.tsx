import "expo-dev-client";
import { StyleSheet } from "react-native";
import { LogBox } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { DefaultTheme, NavigationContainer, Theme } from "@react-navigation/native";
import { TamaguiThemeProvider } from "components/providers/TamaguiThemeProvider";
import { useFonts } from "utils/hooks/react-native/useFonts";
import { rootNavigationRef, RootStackNavigator } from "navigation";
import { LandingOverlay } from "components/organisms";
import { ApolloProviderWithClient } from "services/apollo";
import { getColorValue } from "theme/utils";

LogBox.ignoreAllLogs(); //Ignore all log notifications

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const handleOnNavigationReady = () => null;

const navigationContainerTheme: Theme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: getColorValue("black") },
};

const App = () => {
  const areFontsLoaded = useFonts();

  if (!areFontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={styles.container}>
      <ApolloProviderWithClient>
        <TamaguiThemeProvider>
          <LandingOverlay />
          <NavigationContainer
            ref={rootNavigationRef}
            onReady={handleOnNavigationReady}
            theme={navigationContainerTheme}
          >
            <StatusBar style={"light"} />
            <RootStackNavigator />
          </NavigationContainer>
        </TamaguiThemeProvider>
      </ApolloProviderWithClient>
    </GestureHandlerRootView>
  );
};

// eslint-disable-next-line import/no-default-export
export default App;
