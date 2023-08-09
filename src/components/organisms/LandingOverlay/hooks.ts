import { useCallback, useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { getBiometricAuthentication, useAppStateEvents } from "utils";
import { useIsEntireAnimationFinished, useUserSettingsStore } from "services/zustand";
import { usePrevious } from "utils/hooks";
import { client } from "services/apollo";
import { shallow } from "zustand/shallow";
import { SPLASH_SCREEN_HIDE_DELAY } from "./constants";

type BiometricAuthState = "pending" | "authenticated" | "not authenticated" | "failed";

const useHideSplashScreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hideAsync();
    }, SPLASH_SCREEN_HIDE_DELAY);

    return () => clearTimeout(timeout);
  }, []);
};

const useBiometricAppSecurity = () => {
  const isEntireAnimationFinished = useIsEntireAnimationFinished();
  const session = null;
  const [authenticationState, setAuthenticationState] =
    useState<BiometricAuthState>("pending");
  const stytch = null;
  const { biometricsState, setBiometricsState } = useUserSettingsStore(
    (state) => ({
      biometricsState: state.biometricsState,
      setBiometricsState: state.setBiometricsState,
    }),
    shallow,
  );

  const { appJustForegrounded } = useAppStateEvents();

  const prevBiometricsState = usePrevious(biometricsState);

  const didBiometricsJustBecomeEnabled =
    prevBiometricsState !== "enabled" && biometricsState === "enabled";

  const logoutUser = useCallback(async () => {
    await stytch.session.revoke();
    await client.clearStore();
    // Slightly non-clean way to do this, but it works
    // HomeScreen is calling the hook responsible for the User being shown the biometrics prompt
    // Without a timeout, the hook will be called before HomeScreen unmounts, and `SettingsPromptScreen` will be shown undesirably for a split second
    setTimeout(() => {
      setBiometricsState("never prompted");
    }, 500);
  }, [setBiometricsState, stytch.session]);

  const triggerBiometricValidation = useCallback(async () => {
    if (!isEntireAnimationFinished) {
      return;
    }

    console.log("[BIOMETRICS] Trying to register biometrics");
    setAuthenticationState("pending");

    try {
      const authentication = await getBiometricAuthentication();

      if (authentication === "failed") {
        logoutUser();
      } else {
        setAuthenticationState(authentication);
      }
    } catch (error) {
      console.log("[BIOMETRICS] Error trying to register biometrics", error);

      setAuthenticationState("not authenticated");
    }
  }, [isEntireAnimationFinished, logoutUser]);

  // Handles when User first opens the app and is already logged in
  useEffect(() => {
    if (session && biometricsState === "enabled") {
      triggerBiometricValidation();
    }
  }, [biometricsState, session, triggerBiometricValidation]);

  useEffect(() => {
    // Handles when User toggles using biometrics to `true` in Settings
    if (didBiometricsJustBecomeEnabled) {
      triggerBiometricValidation();
    }
  }, [didBiometricsJustBecomeEnabled, triggerBiometricValidation]);

  useEffect(() => {
    // Handles when User comes back to the app from the background
    if (
      biometricsState === "enabled" &&
      session &&
      appJustForegrounded &&
      authenticationState !== "authenticated" &&
      authenticationState !== "pending" &&
      authenticationState !== "failed"
    ) {
      triggerBiometricValidation();
    }
  }, [
    appJustForegrounded,
    authenticationState,
    biometricsState,
    session,
    triggerBiometricValidation,
  ]);

  return {
    triggerBiometricValidation,
    authenticationState: biometricsState === "enabled" ? authenticationState : undefined,
  };
};

export { useHideSplashScreen, useBiometricAppSecurity };
export type { BiometricAuthState };
