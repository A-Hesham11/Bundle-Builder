import { ChevronDown, ChevronUp } from "lucide-react";
import { ProductCard } from "../../../components/shared";
import { Button } from "../../../components/ui";
import { cn } from "../../../utils/cn";
import { useBuilderStep } from "../hooks/useBuilderStep";
import type { BuilderStepProps } from "../types";

export function BuilderStep({ step, index }: BuilderStepProps) {
  const { isOpen, selectedCount, toggleStep, goToNextStep } = useBuilderStep({
    step,
    index,
  });

  return (
    <section className={cn("rounded-lg", isOpen ? "bg-light-bg" : "bg-page")}>
      <p className="block px-5 py-1 text-[12px] font-normal uppercase tracking-[1.6px] text-text">
        STEP {step.stepNumber} OF 4
      </p>

      <button
        type="button"
        className={cn(
          "block w-full cursor-pointer px-4 pt-4.25 overflow-hidden",
          "border-t",
          isOpen ? "pb-0" : "border-b pb-4.25",
        )}
        onClick={toggleStep}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2">
            <img src={step.icon} className="h-6.5 w-6.5" alt={step.title} />

            <h2 className="text-[18px] font-semibold text-heading sm:text-[22px]">
              {step.title}
            </h2>
          </div>

          <div className="flex items-center gap-0.5 text-[14px] text-accent max-[620px]:col-start-2">
            {isOpen ? `${selectedCount} selected` : null}
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </button>

      {isOpen ? (
        <div className="px-4 py-5">
          {step.products.length ? (
            <div className="mb-4.5 grid grid-cols-1 justify-items-center gap-3.5 min-[720px]:grid-cols-3 min-[998px]:grid-cols-1 min-[1192px]:grid-cols-2">
              {step.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mb-4.5 rounded-lg border border-dashed border-border p-7 text-center text-text">
              Products for this step will be added next.
            </div>
          )}

          <Button
            onClick={goToNextStep}
            className="border-2 border-accent bg-transparent w-2/5! mx-auto block min-h-9.75! text-[18px]! font-medium! text-accent!"
          >
            {step.nextLabel}
          </Button>
        </div>
      ) : null}
    </section>
  );
}
