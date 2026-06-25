import { ReviewLineItem } from "./ReviewLineItem";
import { Button } from "../../../components/ui";
import { Satisfaction } from "../../../assets";
import SatisfactionMessage from "./SatisfactionMessage";
import PriceSummary from "./PriceSummary";
import MonthlyPriceBadge from "./MonthlyPriceBadge";
import { useGetReviewPanel } from "../hooks/useGetReviewPanel";
import { FREE_KEYPAD_ITEM, GROUPS } from "../constants";

export function ReviewPanel() {
  const reviewPanel = useGetReviewPanel();
  return (
    <aside className="sticky top-6 grid grid-cols-1 rounded-lg border border-border bg-light-bg px-5 max-[980px]:static min-[778px]:max-[997px]:grid-cols-12 min-[778px]:max-[997px]:gap-x-8">
      <div className="min-w-0 min-[778px]:max-[997px]:col-span-6">
        <div className="border-b border-b-[#CED6DE] pb-3">
          <p className="block py-1 text-[12px] font-normal uppercase tracking-[1.6px] text-text min-[778px]:max-[997px]:hidden">
            Review
          </p>

          <h2 className="mt-4.25! text-[18px] font-semibold text-heading sm:text-[22px] min-[778px]:max-[997px]:mt-8!">
            Your security system
          </h2>

          <p className="mt-1.5! line-clamp-2 font-medium text-[14px] leading-[130%] tracking-[0.6px] text-text">
            Review your personalized protection system designed to keep what
            matters most safe.
          </p>
        </div>

        <div className="mt-3 flex flex-col gap-4">
          {GROUPS.map((group) => {
            const groupItems = reviewPanel.reviewItems.filter(
              (item) => item.category === group.id,
            );

            if (!groupItems.length) return null;

            return (
              <section key={group.id} className="border-b border-b-[#CED6DE]">
                <h3 className="mb-1 text-xs font-medium uppercase tracking-[0.08em] text-[#A8B2BD]">
                  {group.title}
                </h3>

                {groupItems.map((item) => (
                  <ReviewLineItem key={item.key} item={item} />
                ))}
              </section>
            );
          })}
        </div>

        <ReviewLineItem item={FREE_KEYPAD_ITEM} isCounter={false} />
      </div>

      <div className="min-w-0 min-[778px]:max-[997px]:col-span-6">
        <div className="mb-2 flex items-center justify-between min-[778px]:max-[997px]:mt-8">
          <img
            src={Satisfaction}
            alt="Satisfaction"
            className="h-19.5 w-19.5 min-[778px]:max-[997px]:h-30 min-[778px]:max-[997px]:w-30"
          />

          <SatisfactionMessage />

          <div className="flex flex-col items-end min-[778px]:max-[997px]:hidden">
            <MonthlyPriceBadge />
            <PriceSummary
              subtotal={reviewPanel.subtotal}
              compareTotal={reviewPanel.compareTotal}
            />
          </div>
        </div>

        <div className="mb-3 hidden items-end justify-between min-[778px]:max-[997px]:flex min-[778px]:max-[997px]:flex-row">
          <MonthlyPriceBadge />
          <PriceSummary
            subtotal={reviewPanel.subtotal}
            compareTotal={reviewPanel.compareTotal}
          />
        </div>

        <p className="text-center text-[12px] font-medium text-[#0AA288]">
          Congrats! You’re saving $50.92 on your security bundle!
        </p>

        <Button
          className="bg-accent! text-white! min-h-10.75!"
          onClick={() => alert("Checkout placeholder")}
        >
          Checkout
        </Button>

        <Button
          className="mb-4 min-h-8! text-[14px]!"
          variant="ghost"
          onClick={reviewPanel.saveSystem}
        >
          Save my system for later
        </Button>
      </div>
    </aside>
  );
}
