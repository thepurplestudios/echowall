import { create } from "zustand";

type Mode = "Minimal" | "Japanese" | "Cyber" | "Dreamy" | "Arcade";

type UIState = {
  mode: Mode;
  setMode: (mode: Mode) => void;

  interactions: {
    hover: boolean;
    music: boolean;
    mic: boolean;
    particles: boolean;
  };

  toggleInteraction: (key: keyof UIState["interactions"]) => void;
};

export const useUIStore = create<UIState>((set) => ({
  mode: "Minimal",

  setMode: (mode) => set({ mode }),

  interactions: {
    hover: true,
    music: true,
    mic: false,
    particles: true,
  },

  toggleInteraction: (key) =>
    set((state) => ({
      interactions: {
        ...state.interactions,
        [key]: !state.interactions[key],
      },
    })),
}));
