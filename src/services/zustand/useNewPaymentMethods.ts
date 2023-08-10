import { create } from "zustand";

type PaymentMethod = {
  name: string;
  limit: string;
  cancelation: boolean;
};

type newState = {
  paymentMethod: PaymentMethod | undefined;
  setPaymentMethod: (paymentMethod: PaymentMethod | undefined) => void;
};

const useNewPaymentMethods = create<newState>()((set) => ({
  paymentMethod: undefined,
  setPaymentMethod: (paymentMethod) => set({ paymentMethod }),
}));

export { useNewPaymentMethods };
