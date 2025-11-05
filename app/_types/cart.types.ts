import { HTMLAttributes } from "react";
import { Product } from "./product.types";

export interface CartItemBase {
  id: string;
}

export interface CartListItem<TItemType extends CartItemBase> {
  /**
   * item in cart
   */
  item: Product;
  /**
   * quantity of item in cart
   */
  quantity: number;
}

export interface CartContextType<TItemType extends CartItemBase> {
  /**
   * items in cart
   */
  cart: CartListItem<TItemType>[];
  /**
   * number of items in cart, including multiple items of one type
   */
  cartCount: number;
  /**
   * total cost of products in cart excluding tax and shipping
   */
  cartSubtotal: number;
  /**
   * total cost of products in cart including tax and shipping
   */
  cartTotal: number;
  /**
   * tax amount using default state percentage
   */
  estimatedTax: number;
  /**
   * total cost of products in cart
   */
  shippingGroups: ShippingGroupProps[];
  /**
   * check if cart qualifies for free shipping
   */
  hasFreeShipping: boolean;
  /**
   * adds products to cart
   */
  addProductToCart: (item: CartListItem<TItemType>) => void;
  /**
   * removes products from cart
   */
  removeProductFromCart: (
    item: CartListItem<TItemType>,
    allOfType?: boolean
  ) => void;
  /**
   * clears products from cart
   */
  resetCart: () => void;
}

export interface ShippingGroupProps {
  shipping_rate_data: {
    type: string;
    fixed_amount: {
      amount: number;
      currency: string;
    };
    display_name: string;
    delivery_estimate: {
      minimum: {
        unit: string;
        value: number;
      };
      maximum: {
        unit: string;
        value: number;
      };
    };
  };
}

export type CartContextProps<TItemType extends CartItemBase> = {
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;
