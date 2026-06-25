import { cn } from "../../utils/cn";
import { fmt } from "../../utils/helpers";

export function Price({
  price,
  compareAtPrice,
  className,
  classNamePrice,
  classNameCompareAtPrice,
}: {
  price: number | string;
  compareAtPrice?: number;
  className?: string;
  classNamePrice?: string;
  classNameCompareAtPrice?: string;
}) {
  return (
    <div className={cn("text-right", className)}>
      {compareAtPrice && (
        <p
          className={cn(
            "text-[16px] text-[#D8392B] line-through",
            classNameCompareAtPrice,
          )}
        >
          {fmt(compareAtPrice)}
        </p>
      )}
      <p className={cn("text-[16px]  leading-tight text-text", classNamePrice)}>
        {typeof price === "number" ? fmt(price) : price}
      </p>
    </div>
  );
}
