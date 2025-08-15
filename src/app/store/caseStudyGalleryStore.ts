"use client";
import { create } from "zustand";

type GalleryState = {
  isOpen: boolean;
  activeId: number | null;
  open: (id: number) => void;
  close: () => void;
};

export const useCaseStudyGalleryStore = create<GalleryState>((set) => ({
  isOpen: false,
  activeId: null,
  open: (id) => set({ isOpen: true, activeId: id }),
  close: () => set({ isOpen: false, activeId: null }),
}));
