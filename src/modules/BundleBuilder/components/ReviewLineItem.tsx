import { Price, QuantityStepper } from "../../../components/ui";
import { useBundleStore } from "../../../store";
import type { ReviewItem } from "../types";

type ReviewLineItemProps = {
  item: ReviewItem;
  isCounter?: boolean;
};

export function ReviewLineItem({
  item,
  isCounter = true,
}: ReviewLineItemProps) {
  const increment = useBundleStore((state) => state.increment);
  const decrement = useBundleStore((state) => state.decrement);

  return (
    <div className="grid grid-cols-[44px_1fr_auto] items-center gap-2.5 py-2 ">
      <img
        className="h-10.5 w-10.5 rounded-lg bg-white object-contain"
        src={item.image}
        alt={item.title}
      />

      <div className="flex flex-col gap-2">
        <h2 className="text-[12px] sm:text-[14px] leading-4 text-heading">
          {item.title}
        </h2>
      </div>

      <div className="flex items-end gap-2">
        {isCounter && (
          <QuantityStepper
            value={item.quantity}
            onMinus={() => decrement(item.key)}
            onPlus={() => increment(item.key)}
            className="bg-white"
            compact
          />
        )}

        <Price
          price={item.price}
          compareAtPrice={item.compareAtPrice}
          classNamePrice="text-accent font-medium  text-[14px] sm:text-[16px]"
          classNameCompareAtPrice="text-[14px] text-text text-[14px] sm:text-[16px]"
        />
      </div>
    </div>
  );
}
