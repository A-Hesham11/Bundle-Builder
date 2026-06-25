import { bundleSteps } from "../../../app/constants/bundleData";
import { useBundleStore } from "../../../store";
import { getQuantityKey } from "../../../utils/bundleKeys";
import type { ReviewItem } from "../types";

function getConfiguredReviewItems(
  quantities: Record<string, number>,
): ReviewItem[] {
  return bundleSteps
    .flatMap((step) => step.products)
    .flatMap<ReviewItem>((product) => {
      if (!product.variants?.length) {
        const key = getQuantityKey(product.id);
        const quantity = quantities[key] ?? 0;

        if (quantity <= 0) return [];

        return [
          {
            key,
            category: product.category,
            title: product.title,
            image: product.image,
            price: product.price,
            compareAtPrice: product.compareAtPrice,
            quantity,
          },
        ];
      }

      return product.variants.flatMap<ReviewItem>((variant) => {
        const key = getQuantityKey(product.id, variant.id);
        const quantity = quantities[key] ?? 0;

        if (quantity <= 0) return [];

        return [
          {
            key,
            category: product.category,
            title: `${product.title} - ${variant.name}`,
            image: variant.image,
            price: product.price,
            compareAtPrice: product.compareAtPrice,
            quantity,
          },
        ];
      });
    });
}

function getSeededReviewItems(
  quantities: Record<string, number>,
  staticReviewItems: {
    productId: string;
    category: ReviewItem["category"];
    title: string;
    image: string;
    price: number | string;
    compareAtPrice?: number;
    quantity: number;
  }[],
): ReviewItem[] {
  return staticReviewItems.flatMap<ReviewItem>((item) => {
    const quantity = quantities[item.productId] ?? item.quantity;

    if (quantity <= 0) return [];

    return [
      {
        key: item.productId,
        category: item.category,
        title: item.title,
        image: item.image,
        price: item.price,
        compareAtPrice: item.compareAtPrice,
        quantity,
      },
    ];
  });
}

export function useReviewItems() {
  const quantities = useBundleStore((state) => state.quantities);
  const staticReviewItems = useBundleStore((state) => state.staticReviewItems);

  const configuredItems = getConfiguredReviewItems(quantities);
  const seededItems = getSeededReviewItems(quantities, staticReviewItems);

  return [...configuredItems, ...seededItems];
}
