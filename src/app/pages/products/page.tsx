import React from "react";
import Shirt from "../../componets/Shirts/shirt";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Products Page",
};

const produto = {
  nome: "Polo",
  preco: 25.8,
  tamanho: "G",
  cor: "Azul",
};

export default function Products() {
  return (
    <>
      <Shirt {...produto} />
    </>
  );
}
