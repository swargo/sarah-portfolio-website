"use client";
import { useContext } from "react";
import currencyFormatter from "@/app/_utils/currencyFormatter";
import totalPrice from "@/app/_utils/totalPrice";
import { cartContextObject } from "../layout";
import { Container } from "../_components/Container";
import Link from "next/link";
// import { createSession } from "../../services/CartService";

// const CartContainer = styled.div`
//   display: flex;
// `;

// const ItemsContainer = styled.div`
//   flex: 2;
// `;

// const ItemsHeader = styled.div`
//   display: flex;
// `;

// const ItemsContent = styled.div``;

// const CartItem = styled.div`
//   padding: 25px 0;
//   border-top: 1px solid #efefef;
//   display: flex;
//   gap: 16px;
//   width: 100%;
//   flex: 1;
//   position: relative;
//   :last-of-type {
//     border-bottom: 1px solid #efefef;
//   }
// `;

// const Column = styled.div`
//   flex: 1;
// `;

// const NoItemsMessage = styled.div``;

// const RemoveButton = styled.button`
//   position: absolute;
//   right: 10px;
//   bottom: 20px;
//   background: none;
//   text-decoration: underline;
//   border: none;
//   cursor: pointer;
//   &:hover {
//     text-decoration: none;
//   }
// `;

// const Summary = styled.div`
//   flex: 1;
//   margin-left: 30px;
//   border: 1px solid #efefef;
//   padding: 16px;
// `;

// const CheckoutButton = styled.button``;

const Cart = () => {
  const cartContext = useContext(cartContextObject);
  const {
    cart,
    cartSubtotal,
    shippingGroups,
    hasFreeShipping,
    cartTotal,
    estimatedTax,
  } = cartContext;

  const buildCheckoutBody = () => {
    const lineItems: { quantity: number; priceId: string }[] = [];
    cart.forEach((item) => {
      lineItems.push({ quantity: item.quantity, priceId: item.item.id });
    });
    return { lineItems, shippingGroups };
  };

  const handleCheckout = async () => {
    const body = buildCheckoutBody();
    // createSession(body);
  };

  const renderCartItems = () => {
    return cart.map((cartItem) => {
      const { item } = cartItem;
      return (
        <></>
        // <CartItem key={`cart-item-${item.id}`}>
        //   <Link href={`/shop/product-details?id=${item.id}`}>
        //     <img width="140px" height="210px" src={item.images[0]} />
        //   </Link>
        //   <Column>{item.name}</Column>
        //   <Column>{currencyFormatter(item.default_price.unit_amount)}</Column>
        //   <Column>
        //     <button onClick={() => cartContext.removeProductFromCart(cartItem)}>
        //       -
        //     </button>
        //     {cartItem.quantity}
        //     <button onClick={() => cartContext.addProductToCart(cartItem)}>
        //       +
        //     </button>
        //   </Column>
        //   <Column>
        //     {currencyFormatter(
        //       totalPrice(item.default_price.unit_amount, cartItem.quantity)
        //     )}
        //   </Column>
        //   <RemoveButton
        //     onClick={() => cartContext.removeProductFromCart(cartItem, true)}
        //   >
        //     Remove
        //   </RemoveButton>
        // </CartItem>
      );
    });
  };

  return (
    <Container>
      {/* <CartContainer>
        {cart.length > 0 && (
          <>
            <ItemsContainer>
              <ItemsHeader>
                <Column>
                  <div></div>
                </Column>
                <Column>
                  <h4>Item</h4>
                </Column>
                <Column>
                  <h4>Item Price</h4>
                </Column>
                <Column>
                  <h4>Quantity</h4>
                </Column>
                <Column>
                  <h4>Total Price</h4>
                </Column>
              </ItemsHeader>
              <ItemsContent>{renderCartItems()}</ItemsContent>
            </ItemsContainer>
            <Summary>
              <p>Subtotal: {currencyFormatter(cartSubtotal)}</p>
              <p>
                Shipping:{" "}
                {hasFreeShipping
                  ? "FREE"
                  : currencyFormatter(
                      shippingGroups[0]?.shipping_rate_data?.fixed_amount.amount
                    )}
              </p>
              <p>Estimated Tax: {currencyFormatter(estimatedTax)}</p>
              <p>Total: {currencyFormatter(cartTotal)}</p>
              <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
            </Summary>
          </>
        )}
        {cart.length === 0 && (
          <NoItemsMessage>
            There are no items in your cart at the moment.
          </NoItemsMessage>
        )}
      </CartContainer> */}
    </Container>
  );
};

export default Cart;
