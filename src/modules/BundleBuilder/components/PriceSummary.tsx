import { fmt } from "../../../utils/helpers";

const PriceSummary = ({
  subtotal,
  compareTotal,
}: {
  subtotal: number;
  compareTotal: number;
}) => {
  return (
    <div className="flex items-end gap-2">
      <del className="mb-0.5 text-[18px]! leading-5 tracking-[0.25%] text-text">
        {fmt(compareTotal)}
      </del>

      <strong className="text-2xl leading-8 tracking-[-0.13%] text-accent">
        {fmt(subtotal)}
      </strong>
    </div>
  );
};

export default PriceSummary;
