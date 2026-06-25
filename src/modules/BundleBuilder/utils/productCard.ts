import type { Product } from "../../../app/types/types";
import { getQuantityKey } from "../../../utils/bundleKeys";

type Quantities = Record<string, number>;

export function getActiveVariant(product: Product, activeVariantId?: string) {
  return product.variants?.find((variant) => variant.id === activeVariantId);
}

export function getDefaultVariantId(product: Product) {
  return product.variants?.[0]?.id;
}

export function getSelectedQuantity(product: Product, quantities: Quantities) {
  const hasVariants = Boolean(product.variants?.length);

  if (!hasVariants) {
    return quantities[getQuantityKey(product.id)] ?? 0;
  }

  return (
    product.variants?.reduce((total, variant) => {
      const quantity = quantities[getQuantityKey(product.id, variant.id)] ?? 0;

      return total + quantity;
    }, 0) ?? 0
  );
}
