import { useEffect } from "react";
import { useBundleStore } from "./store";
import { BundleBuilderPage } from "./pages/BundleBuilderPage";

export default function App() {
  const hydrateSavedSystem = useBundleStore(
    (state) => state.hydrateSavedSystem,
  );

  useEffect(() => {
    hydrateSavedSystem();
  }, [hydrateSavedSystem]);

  return <BundleBuilderPage />;
}
