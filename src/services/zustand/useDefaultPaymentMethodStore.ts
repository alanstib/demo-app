import { create } from "zustand";
import { persist, PersistStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_ID = "default-payment-method";

// Create a custom storage adapter for AsyncStorage
const asyncStorageAdapter: PersistStorage<DefaultPaymentMethodState> = {
  getItem: async (name) => {
    const result = await AsyncStorage.getItem(name);

    return result ? JSON.parse(result) : null;
  },
  setItem: (name, value) => AsyncStorage.setItem(name, JSON.stringify(value)),
  removeItem: (name) => AsyncStorage.removeItem(name),
};

type DefaultPaymentMethodState = {
  defaultMethodId: string;
  setDefaultMethodId: (id: string) => void;
};

const useDefaultPaymentMethodStore = create<DefaultPaymentMethodState>()(
  persist(
    (set) => ({
      defaultMethodId: "",
      setDefaultMethodId: (id) => set({ defaultMethodId: id }),
    }),
    {
      name: STORAGE_ID,
      storage: asyncStorageAdapter,
    },
  ),
);

export { useDefaultPaymentMethodStore };
