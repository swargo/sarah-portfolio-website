import { ProductProps } from "@/app/_types/product.types";
import { cartContextObject } from "@/app/layout";
import { Plus } from "lucide-react";
import { useContext } from "react";

export const AddButton = (props: ProductProps) => {
  const context = useContext(cartContextObject);

  const addToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    context.addProductToCart({ item: { ...props }, quantity: 1 });
  };

  return (
    <button
      onClick={addToCart}
      className="text-[20px] absolute top-0 right-0 h-[25px] w-[25px] m-2 border-0 bg-lightAccent hover:bg-bk hover:text-lightAccent rounded-full cursor-pointer"
    >
      <Plus size={20} className="inline align-baseline" />
    </button>
  );
};
