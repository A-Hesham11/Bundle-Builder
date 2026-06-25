import { BuilderAccordion } from "./BuilderAccordion";
import { ReviewPanel } from "./ReviewPanel";

export function BundleBuilder() {
  return (
    <main className="mx-auto grid w-full max-w-350 grid-cols-[minmax(0,1fr)_400px] items-start gap-4 px-0 py-6 text-left sm:px-5 md:px-6 lg:gap-4 lg:py-8 max-[998px]:grid-cols-1">
      <h2 className="animate-fade-up ani block text-center text-[28px] font-semibold text-heading sm:hidden">
        Let’s get started!
      </h2>

      <section className="animate-fade-up flex min-w-0 flex-col gap-3.5">
        <BuilderAccordion />
      </section>

      <div className="animate-slide-in-right max-[998px]:animate-fade-up">
        <ReviewPanel />
      </div>
    </main>
  );
}
