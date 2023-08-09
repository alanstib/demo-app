import {
  NavigationContainerRef,
  createNavigationContainerRef,
} from "@react-navigation/native";
import { AllNavigationParamLists, AppNavigationScreenName } from "./types";

const rootNavigationRef =
  createNavigationContainerRef<NavigationContainerRef<AllNavigationParamLists>>();

const getDataForCurrentScreen = () => rootNavigationRef.current?.getCurrentRoute();

const getCurrentScreenName = () =>
  getDataForCurrentScreen()?.name
    ? (getDataForCurrentScreen()?.name as AppNavigationScreenName)
    : "";

export { getCurrentScreenName, rootNavigationRef };
