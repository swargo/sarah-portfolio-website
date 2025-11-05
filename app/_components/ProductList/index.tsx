"use client";
import React, { useEffect, useState } from "react";
import { ProductCard } from "../ProductCard";
import { Product } from "@/app/_types/product.types";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const data: Product[] = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const productList = products.map((product: Product) => {
    const { id } = product;
    return <ProductCard key={id} {...product} />;
  });

  return <>{productList}</>;
};

export default ProductList;
