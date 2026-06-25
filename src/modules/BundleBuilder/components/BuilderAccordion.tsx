import { bundleSteps } from "../../../app/constants/bundleData";
import { BuilderStep } from "./BuilderStep";

export function BuilderAccordion() {
  return (
    <>
      {bundleSteps.map((step, index) => (
        <div
          key={step.id}
          className="animate-fade-up"
          style={{
            animationDelay: `${index * 90}ms`,
          }}
        >
          <BuilderStep step={step} index={index} />
        </div>
      ))}
    </>
  );
}
