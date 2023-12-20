import Link from "next/link";
import React from "react";

export default function commetsTodo({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Exibindo o To-do {params.id}</h1>
      <Link href={`/pages/todo/${params.id}`}>Voltar</Link>
    </div>
  );
}
