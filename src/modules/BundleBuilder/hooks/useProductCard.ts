import { useBundleStore } from "../../../store";
import { getQuantityKey } from "../../../utils/bundleKeys";
import type { ProductCardProps } from "../types";
import {
  getActiveVariant,
  getDefaultVariantId,
  getSelectedQuantity,
} from "../utils/productCard";

export function useProductCard({ product }: ProductCardProps) {
  const activeVariants = useBundleStore((state) => state.activeVariants);
  const quantities = useBundleStore((state) => state.quantities);
  const setActiveVariant = useBundleStore((state) => state.setActiveVariant);
  const increment = useBundleStore((state) => state.increment);
  const decrement = useBundleStore((state) => state.decrement);

  const hasVariants = Boolean(product.variants?.length);

  const activeVariantId = hasVariants
    ? (activeVariants[product.id] ?? getDefaultVariantId(product))
    : undefined;

  const activeVariant = getActiveVariant(product, activeVariantId);

  const quantityKey = getQuantityKey(product.id, activeVariantId);
  const quantity = quantities[quantityKey] ?? 0;

  const selectedQuantity = getSelectedQuantity(product, quantities);
  const isSelected = selectedQuantity > 0;

  function changeVariant(variantId: string) {
    setActiveVariant(product.id, variantId);
  }

  function increaseQuantity() {
    increment(quantityKey);
  }

  function decreaseQuantity() {
    decrement(quantityKey);
  }

  return {
    activeVariant,
    activeVariantId,
    hasVariants,
    isSelected,
    quantity,
    changeVariant,
    increaseQuantity,
    decreaseQuantity,
  };
}
