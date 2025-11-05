import { ShippingGroupProps } from "./cart.types";

type CheckoutProps = {
  shippingGroups: ShippingGroupProps[];
  lineItems: { quantity: number; priceId: string }[];
};

export type { CheckoutProps };
