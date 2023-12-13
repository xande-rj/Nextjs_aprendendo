import React from "react";
import Shirt from "../../componets/Shirts/shirt";
import Link from "next/link";
import Navbar from "@/app/componets/navbar/navbabr";

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
