import { ShippingGroupProps } from "@/app/_types/cart.types";

export const defaultShippingRates: ShippingGroupProps[] = [
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: {
        amount: 1000,
        currency: "usd",
      },
      display_name: "Standard shipping",
      delivery_estimate: {
        minimum: {
          unit: "business_day",
          value: 5,
        },
        maximum: {
          unit: "business_day",
          value: 7,
        },
      },
    },
  },
  {
    shipping_rate_data: {
      type: "fixed_amount",
      fixed_amount: {
        amount: 2500,
        currency: "usd",
      },
      display_name: "Expedited shipping",
      delivery_estimate: {
        minimum: {
          unit: "business_day",
          value: 1,
        },
        maximum: {
          unit: "business_day",
          value: 2,
        },
      },
    },
  },
];

export const freeShippingRate: ShippingGroupProps = {
  shipping_rate_data: {
    type: "fixed_amount",
    fixed_amount: {
      amount: 0,
      currency: "usd",
    },
    display_name: "Free shipping",
    delivery_estimate: {
      minimum: {
        unit: "business_day",
        value: 5,
      },
      maximum: {
        unit: "business_day",
        value: 7,
      },
    },
  },
};
