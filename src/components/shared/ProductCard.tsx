import { useProductCard } from "../../modules/BundleBuilder/hooks/useProductCard";
import type { ProductCardProps } from "../../modules/BundleBuilder/types";
import { cn } from "../../utils/cn";
import { Price, QuantityStepper } from "../ui";
import { ProductBadge } from "./ProductBadge";
import { ProductVariantSelector } from "./ProductVariantSelector";

export function ProductCard({ product }: ProductCardProps) {
  const {
    activeVariant,
    activeVariantId,
    hasVariants,
    isSelected,
    quantity,
    changeVariant,
    increaseQuantity,
    decreaseQuantity,
  } = useProductCard({ product });

  return (
    <article
      className={cn(
        "group relative grid grid-cols-10 overflow-hidden rounded-[18px] border bg-page text-left transition",
        "border-border shadow-none",
        "max-[720px]:min-h-0 max-[720px]:rounded-2xl",
        isSelected && "border-accent shadow-[0_0_0_2px_var(--accent-border)]",
      )}
    >
      {product.badge ? <ProductBadge>{product.badge}</ProductBadge> : null}

      <div className="relative col-span-full flex h-38.5 items-center justify-center px-6 pt-6 max-[720px]:h-33 min-[998px]:col-span-3">
        <img
          src={activeVariant?.image ?? product.image}
          alt={product.title}
          className="h-34.25 w-25.25 scale-120 object-contain transition duration-200 group-hover:scale-125"
        />
      </div>

      <div className="col-span-full flex flex-1 flex-col justify-center px-4 pb-4 pt-4 min-[998px]:col-span-7">
        <div className="max-[720px]:min-h-0">
          <h3 className="text-[16px] font-medium tracking-[0.6px] text-heading">
            {product.title}
          </h3>

          {product.description ? (
            <p className="my-1! line-clamp-3 max-w-75 text-[13px] leading-[130%] tracking-[0.6px] text-text">
              {product.description}{" "}
              {product.learnMore ? (
                <a
                  href="#"
                  className="inline-flex text-[13px] font-semibold leading-none text-accent! no-underline"
                >
                  {product.learnMore}
                </a>
              ) : null}
            </p>
          ) : null}
        </div>

        {hasVariants ? (
          <ProductVariantSelector
            variants={product.variants ?? []}
            activeId={activeVariantId}
            onChange={changeVariant}
          />
        ) : null}

        <div className="mt-2 flex items-end justify-between gap-3">
          <QuantityStepper
            value={quantity}
            onMinus={decreaseQuantity}
            onPlus={increaseQuantity}
          />

          <Price
            price={product.price}
            compareAtPrice={product.compareAtPrice}
          />
        </div>
      </div>
    </article>
  );
}
