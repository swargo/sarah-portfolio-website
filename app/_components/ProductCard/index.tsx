import { ProductProps } from "@/app/_types/product.types";
import currencyFormatter from "@/app/_utils/currencyFormatter";
import Link from "next/link";
import { AddButton } from "./AddButton";

export const ProductCard = (props: ProductProps) => {
  const { default_price, id, images, name } = props;
  const formattedPrice = currencyFormatter(default_price.unit_amount);

  return (
    <div className="flex flex-col relative min-w-[150px] basis-[20%]">
      <Link
        href={`/shop/product-details?id=${id}`}
        className="text-darkAccent hover:text-tertiary no-underline"
      >
        <img alt="" src={images[0]} className="w-full" />
        <p className="mt-1">{name}</p>
      </Link>
      <AddButton {...props} />

      <p className="text-[12px] font-bold text-darkAccent">{formattedPrice}</p>
    </div>
  );
};
