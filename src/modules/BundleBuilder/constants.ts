import { Keypad } from "../../assets";
import type { ReviewItem } from "./types";

export const GROUPS = [
  { id: "cameras", title: "Cameras" },
  { id: "sensors", title: "Sensors" },
  { id: "accessories", title: "Accessories" },
  { id: "plan", title: "Plan" },
] as const;

export const FREE_KEYPAD_ITEM: ReviewItem = {
  image: Keypad,
  category: "cameras",
  title: "Keypad",
  quantity: 0,
  key: "",
  price: "Free",
  compareAtPrice: 5.99,
};
