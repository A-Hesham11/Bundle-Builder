import { useMemo } from "react";
import { useBundleStore } from "../../../store";
import { useReviewItems } from "./useReviewItems";
import { getCompareTotal, getSubtotal } from "../utils/bundleTotals";

export function useGetReviewPanel() {
  const saveSystem = useBundleStore((state) => state.saveSystem);
  const items = useReviewItems();

  const reviewItems = useMemo(
    () =>
      items.map((item) => ({
        ...item,
        price: Number(item.price),
      })),
    [items],
  );

  const subtotal = useMemo(() => getSubtotal(reviewItems), [reviewItems]);

  const compareTotal = useMemo(
    () => getCompareTotal(reviewItems),
    [reviewItems],
  );

  return {
    saveSystem,
    reviewItems,
    subtotal,
    compareTotal,
  };
}
