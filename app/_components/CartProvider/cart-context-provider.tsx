"use client";
import React, { useState, HTMLAttributes, useEffect } from "react";
import {
  defaultShippingRates,
  freeShippingRate,
} from "@/app/_constants/shippingRates";
import {
  CartContextType,
  CartItemBase,
  CartListItem,
} from "@/app/_types/cart.types";
import { DEFAULT_TAX_RATE, FREE_SHIP_MIN } from "@/app/_constants/cart";

export type CartContextProps<TItemType extends CartItemBase> = {
  context: React.Context<CartContextType<TItemType>>;
} & HTMLAttributes<HTMLDivElement>;

export function CartContextProvider<TItemType extends CartItemBase>({
  children,
  context,
}: CartContextProps<TItemType>) {
  const [products, setProducts] = useState({} as CartListItem<TItemType>[]);
  const [shippingGroups, setShippingGroups] = useState(defaultShippingRates);
  const [hasFreeShipping, setFreeShipping] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setProducts(JSON.parse(storedCart));
    }
    checkFreeShipping();
  }, []);

  useEffect(() => {
    getShippingGroups();
  }, [hasFreeShipping]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(products));
    checkFreeShipping();
  }, [products]);

  const getProductById = (id: string): CartListItem<TItemType> | undefined => {
    return products.find((p) => p.item.id === id);
  };

  const addProductToCart = (product: CartListItem<TItemType>): void => {
    const existingProduct = getProductById(product.item.id);
    let newState: CartListItem<TItemType>[] = [];
    if (existingProduct) {
      newState = products.map((p) => {
        if (p.item.id === existingProduct.item.id) {
          return {
            item: p.item,
            quantity: p.quantity + 1,
          };
        }
        return p;
      });
      setProducts(newState);
      return;
    }
    setProducts([...products, product]);
  };

  const resetCart = () => {
    setProducts([]);
  };

  const removeProductFromCart = (
    product: CartListItem<TItemType>,
    allOfType: boolean | undefined
  ): void => {
    let newProducts: CartListItem<TItemType>[] = [];
    if (allOfType || product.quantity === 1) {
      newProducts = products.filter((p) => p.item.id !== product.item.id);
    } else {
      newProducts = products.map((p) => {
        if (p.item.id === product.item.id) {
          return {
            item: p.item,
            quantity: p.quantity - 1,
          };
        }
        return p;
      });
    }

    setProducts(newProducts);
  };

  const getCartCount = () => {
    let count = 0;
    for (let i = 0; i < products.length; i++) {
      count += products[i].quantity;
    }
    return count;
  };

  const getCartSubtotal = () => {
    let count = 0;
    for (let i = 0; i < products.length; i++) {
      count +=
        products[i].item.default_price.unit_amount * products[i].quantity;
    }
    return count;
  };

  const getCartTotal = () => {
    return (
      getCartSubtotal() +
      shippingGroups[0].shipping_rate_data.fixed_amount.amount +
      getEstimatedTax()
    );
  };

  const getEstimatedTax = () => {
    return getCartSubtotal() * DEFAULT_TAX_RATE;
  };

  const checkFreeShipping = () => {
    if (getCartSubtotal() >= FREE_SHIP_MIN) {
      setFreeShipping(true);
    } else {
      setFreeShipping(false);
    }
  };

  const getShippingGroups = () => {
    if (hasFreeShipping) {
      setShippingGroups([freeShippingRate, ...defaultShippingRates]);
    } else {
      setShippingGroups(defaultShippingRates);
    }
  };

  const contextValue: CartContextType<TItemType> = {
    cart: products,
    cartCount: getCartCount(),
    cartSubtotal: getCartSubtotal(),
    cartTotal: getCartTotal(),
    estimatedTax: getEstimatedTax(),
    shippingGroups: shippingGroups,
    hasFreeShipping: hasFreeShipping,
    addProductToCart: addProductToCart,
    removeProductFromCart: removeProductFromCart,
    resetCart: resetCart,
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}
