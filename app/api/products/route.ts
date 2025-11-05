import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripeKey: any = process.env.STRIPE_SECRET_KEY;
const stripe = new Stripe(stripeKey);

export async function GET() {
  const products = await stripe.products.list({
    limit: 15,
    expand: ["data.default_price"],
  });
  return NextResponse.json(products.data);
}
