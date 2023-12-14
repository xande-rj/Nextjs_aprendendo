import React from "react";
import Image from 'next/image'
import profilePic from '../../public/Camisa_azul_Polo.jpg'
import style from '../../styles/Main.module.css'

interface Camisa {
  nome: string;
  preco: number;
  tamanho: string | number;
  cor: string;
}

export default function Shirt({ nome, preco, tamanho, cor }: Camisa) {
  if(cor == "Azul"){
    return(
      <div className={style.product}>
        <Image src={profilePic} alt="imagem"
         width={300}
         height={300}/>
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
