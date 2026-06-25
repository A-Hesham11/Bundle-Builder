export type BundleCategory = "cameras" | "sensors" | "accessories" | "plan";

export type ProductVariant = {
  id: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  stepId: string;
  category: BundleCategory;
  title: string;
  description?: string;
  image: string;
  badge?: string;
  learnMore?: string;
  compareAtPrice?: number;
  price: number;
  variants?: ProductVariant[];
};

export type BundleStep = {
  id: string;
  stepNumber: number;
  title: string;
  nextLabel: string;
  category: BundleCategory;
  icon: string;
  products: Product[];
};

export type SeededReviewItem = {
  productId: string;
  category: BundleCategory;
  title: string;
  image: string;
  price: number;
  compareAtPrice?: number;
  quantity: number;
};
