import type { PricedItem } from "../types";

export function getSubtotal(items: PricedItem[]) {
  return items.reduce(
    (total, item) => total + Number(item.price) * item.quantity,
    0,
  );
}

export function getCompareTotal(items: PricedItem[]) {
  return items.reduce((total, item) => {
    return total + (item.compareAtPrice ?? Number(item.price)) * item.quantity;
  }, 0);
}

export function getSavings(items: PricedItem[]) {
  return getCompareTotal(items) - getSubtotal(items);
}
