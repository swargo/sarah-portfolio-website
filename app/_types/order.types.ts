export interface OrderProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
  };
  total: number;
  subtotal: number;
  taxTotal: number;
  shippingTotal: number;
}
