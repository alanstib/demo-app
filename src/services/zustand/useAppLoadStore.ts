import { create } from "zustand";
import { shallow } from "zustand/shallow";

type AppLoadState = {
  // There is an initial animation that plays when User is logged in
  isInitialAnimationPlaying: boolean;
  // after the initial animation finishes, we display (for 1 second), "Employee Since YYYY"
  isLoggedInUIShowing: boolean;
  setIsInitialAnimationPlayingFalse: () => void;
  setIsLoggedInUIShowingFalse: () => void;
  setIsEntireAnimationFinished: () => void;
};

const useAppLoadStore = create<AppLoadState>()((set) => ({
  isInitialAnimationPlaying: true,
  isLoggedInUIShowing: true,
  setIsInitialAnimationPlayingFalse: () => set({ isInitialAnimationPlaying: false }),
  setIsLoggedInUIShowingFalse: () =>
    set({
      isLoggedInUIShowing: false,
    }),
  setIsEntireAnimationFinished: () =>
    set({
      isInitialAnimationPlaying: false,
      isLoggedInUIShowing: false,
    }),
}));

const useIsEntireAnimationFinished = () => {
  const { isInitialAnimationPlaying, isLoggedInUIShowing } = useAppLoadStore(
    (state) => ({
      isInitialAnimationPlaying: state.isInitialAnimationPlaying,
      isLoggedInUIShowing: state.isLoggedInUIShowing,
    }),
    shallow,
  );

  return !isInitialAnimationPlaying && !isLoggedInUIShowing;
};

export { useAppLoadStore, useIsEntireAnimationFinished };
