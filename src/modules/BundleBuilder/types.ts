import type { BundleStep, Product } from "../../app/types/types";

export type PricedItem = {
  price: number;
  compareAtPrice?: number;
  quantity: number;
};

export type BuilderStepProps = {
  step: BundleStep;
  index: number;
};

export type ProductCardProps = {
  product: Product;
};

export type ReviewItem = {
  key: string;
  category: "cameras" | "sensors" | "accessories" | "plan";
  title: string;
  image: string;
  price: number | string;
  compareAtPrice?: number;
  quantity: number;
};
