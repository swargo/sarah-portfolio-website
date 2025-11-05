"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { ProductProps } from "@/app/_types/product.types";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data: ProductProps[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const productList = products.map((product: ProductProps) => {
    const { id } = product;
    return <ProductCard key={id} {...product} />;
  });

  return <>{productList}</>;
};

export default ProductList;
