import type { ProductVariant } from "../../app/types/types";
import { cn } from "../../utils/cn";

type ProductVariantSelectorProps = {
  variants: ProductVariant[];
  activeId?: string;
  onChange: (variantId: string) => void;
};

export function ProductVariantSelector({
  variants,
  activeId,
  onChange,
}: ProductVariantSelectorProps) {
  return (
    <div className="mt-2 flex flex-wrap gap-1.5">
      {variants.map((v) => {
        const active = activeId === v.id;
        return (
          <button
            key={v.id}
            type="button"
            onClick={() => onChange(v.id)}
            className={cn(
              "inline-flex h-6.5 w-16.5 items-center gap-1 rounded-md border py-px px-0.75 text-[11.5px] font-semibold transition-colors cursor-pointer",
              active
                ? "border-[#0AA288] text-heading bg-[#1DF0BB0A]"
                : "border-[#e5e4e7] text-heading hover:border-[#0AA288]",
            )}
          >
            <img src={v.image} alt={v.name} className="h-6.5 w-6" />
            <span className="font-semibold text-[11px] tracking-[0.6px]">
              {v.name}
            </span>
          </button>
        );
      })}
    </div>
  );
}
