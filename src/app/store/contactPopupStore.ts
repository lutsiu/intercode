import { create } from "zustand";

type State = {
  isOpen: boolean;
  preset: string | null;
};

type Actions = {
  open: (preset?: string | null) => void; 
  openPlain: () => void;
  close: () => void;
  setPreset: (text: string | null) => void;
};

export const useContactPopupStore = create<State & Actions>((set) => ({
  isOpen: false,
  preset: null,
  open: (preset) => set({ isOpen: true, preset: preset ?? null }),
  openPlain: () => set({ isOpen: true, preset: null }),
  close: () => set({ isOpen: false, preset: null }),
  setPreset: (text) => set({ preset: text }),
}));
