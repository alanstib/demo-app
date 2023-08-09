import { create } from "zustand";

type ProfileDrawerState = {
  isProfileDrawerOpen: boolean;
  openProfileDrawer: () => void;
  closeProfileDrawer: () => void;
};

const useProfileDrawerStore = create<ProfileDrawerState>()((set) => ({
  isProfileDrawerOpen: false,
  openProfileDrawer: () => set({ isProfileDrawerOpen: true }),
  closeProfileDrawer: () => set({ isProfileDrawerOpen: false }),
}));

export { useProfileDrawerStore };
