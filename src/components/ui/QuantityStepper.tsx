import { cn } from "../../utils/cn";

type QuantityStepperProps = {
  value: number;
  onMinus: () => void;
  onPlus: () => void;
  compact?: boolean;
  className?: string;
};

export function QuantityStepper({
  value,
  onMinus,
  onPlus,
  compact = false,
  className,
}: QuantityStepperProps) {
  const isMinusDisabled = value === 0;

  const buttonClass = (disabled?: boolean) =>
    cn(
      "flex items-center justify-center rounded-md border text-base font-bold leading-none transition",
      "focus:outline-none focus:ring-2 focus:ring-accent/20",
      compact ? "h-6 w-6" : "h-7 w-7",
      disabled
        ? "cursor-not-allowed border-[#d8e1ec]! bg-white! text-[#b7c3cf]!"
        : "cursor-pointer border-transparent bg-[#eef3f8] text-heading hover:bg-accent/10 hover:text-accent",
      !disabled && className ? "bg-white" : "bg-[#eef3f8]",
    );

  return (
    <div className="inline-flex items-center gap-1">
      <button
        type="button"
        onClick={onMinus}
        disabled={isMinusDisabled}
        className={buttonClass(isMinusDisabled)}
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span
        className={cn(
          "min-w-4 text-center font-medium text-heading",
          compact ? "text-xs" : "text-base",
        )}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={onPlus}
        className={buttonClass(false)}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}
