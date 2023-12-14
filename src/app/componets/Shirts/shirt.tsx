import React from "react";

interface Camisa {
  nome: string;
  preco: number;
  tamanho: string | number;
  cor: string;
}

export default function Shirt({ nome, preco, tamanho, cor }: Camisa) {
  if(cor == "Azul"){
    return(
      <div>
      <h1>{nome}</h1>
      <h1>{preco}</h1>
      <h1>{tamanho}</h1>
      <h1>{cor}</h1>
    </div>
    )
  }else{
  return (
    <div>
      <h1>{nome}</h1>
      <h1>{preco}</h1>
      <h1>{tamanho}</h1>
     
    </div>
  );
}
}
