import { create } from "zustand";

type ContactPopupState = {
  isOpen: boolean;
  preset: string; 
  open: (preset?: string) => void;
  close: () => void;
};

export const useContactPopupStore = create<ContactPopupState>((set) => ({
  isOpen: false,
  preset: "",
  open: (preset) => set({ isOpen: true, preset: preset ?? "" }),
  close: () => set({ isOpen: false, preset: "" }),
}));
