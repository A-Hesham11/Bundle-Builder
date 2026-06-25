import { create } from "zustand";
import type { SeededReviewItem } from "../app/types/types";
import { seededReviewItems } from "../app/constants/bundleData";

type QuantityKey = string;

type BundleState = {
  openStepId: string;
  activeVariants: Record<string, string>;
  quantities: Record<QuantityKey, number>;
  staticReviewItems: SeededReviewItem[];

  setOpenStep: (stepId: string) => void;
  setActiveVariant: (productId: string, variantId: string) => void;
  increment: (key: QuantityKey) => void;
  decrement: (key: QuantityKey) => void;
  saveSystem: () => void;
  hydrateSavedSystem: () => void;
};

const STORAGE_KEY = "bundle-builder-system";

export const useBundleStore = create<BundleState>((set, get) => ({
  openStepId: "cameras",

  activeVariants: {
    "wyze-cam-v4": "white",
    "wyze-cam-pan-v3": "white",
  },

  quantities: {
    "wyze-cam-v4:white": 1,
    "wyze-cam-pan-v3:white": 1,
  },

  staticReviewItems: seededReviewItems,

  setOpenStep: (stepId) => {
    set({ openStepId: stepId });
  },

  setActiveVariant: (productId, variantId) => {
    set((state) => ({
      activeVariants: {
        ...state.activeVariants,
        [productId]: variantId,
      },
    }));
  },

  increment: (key) => {
    set((state) => ({
      quantities: {
        ...state.quantities,
        [key]: (state.quantities[key] ?? 0) + 1,
      },
    }));
  },

  decrement: (key) => {
    set((state) => ({
      quantities: {
        ...state.quantities,
        [key]: Math.max((state.quantities[key] ?? 0) - 1, 0),
      },
    }));
  },

  saveSystem: () => {
    const state = get();

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        activeVariants: state.activeVariants,
        quantities: state.quantities,
        staticReviewItems: state.staticReviewItems,
      }),
    );
  },

  hydrateSavedSystem: () => {
    const savedSystem = localStorage.getItem(STORAGE_KEY);

    if (!savedSystem) return;

    try {
      const parsed = JSON.parse(savedSystem);

      set({
        activeVariants: parsed.activeVariants ?? {},
        quantities: parsed.quantities ?? {},
        staticReviewItems: parsed.staticReviewItems ?? seededReviewItems,
      });
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  },
}));
