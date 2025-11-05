"use client";
import { CartContextType, CartItemBase } from "@/app/_types/cart.types";
import { createContext } from "react";

const defaultContext: CartContextType<any> = {
  cart: [],
  cartCount: 0,
  cartSubtotal: 0,
  cartTotal: 0,
  estimatedTax: 0,
  shippingGroups: [],
  hasFreeShipping: false,
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  resetCart: () => {},
};

export function CreateCartContext<TItemType extends CartItemBase>() {
  return createContext<CartContextType<TItemType>>(defaultContext);
}
