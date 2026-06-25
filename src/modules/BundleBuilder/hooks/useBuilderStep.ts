import { bundleSteps } from "../../../app/constants/bundleData";
import { useBundleStore } from "../../../store";
import { getQuantityKey } from "../../../utils/bundleKeys";
import type { BuilderStepProps } from "../types";

export function useBuilderStep({ step, index }: BuilderStepProps) {
  const openStepId = useBundleStore((state) => state.openStepId);
  const setOpenStep = useBundleStore((state) => state.setOpenStep);
  const quantities = useBundleStore((state) => state.quantities);

  const isOpen = openStepId === step.id;
  const nextStep = bundleSteps[index + 1];

  const selectedCount = step.products.filter((product) => {
    if (!product.variants?.length) {
      const quantity = quantities[getQuantityKey(product.id)] ?? 0;

      return quantity > 0;
    }

    return product.variants.some((variant) => {
      const quantity = quantities[getQuantityKey(product.id, variant.id)] ?? 0;

      return quantity > 0;
    });
  }).length;

  function toggleStep() {
    setOpenStep(step.id);
  }

  function goToNextStep() {
    if (!nextStep) return;

    setOpenStep(nextStep.id);
  }

  return {
    isOpen,
    selectedCount,
    toggleStep,
    goToNextStep,
  };
}
