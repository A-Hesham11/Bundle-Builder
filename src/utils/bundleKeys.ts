export function getQuantityKey(productId: string, variantId?: string) {
  return variantId ? `${productId}:${variantId}` : productId;
}
