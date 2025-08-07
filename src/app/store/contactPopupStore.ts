import {create} from "zustand";
import { ContactPopupStore } from "../types/ContactPopupStoreType";

export const useContactPopupStore = create<ContactPopupStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));