"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default function Page({ params }: { params: { id: string } }) {
  const [todo, setTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${params.id}`
        );
        const data: Todo = await response.json();
        setTodo(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };
    fetchTodo();
  }, []);

  return (
    <div>
      <h1>Exibindo o To-do {params.id} </h1>
      <h1>Detalhes:</h1>
      <p>Title: {todo?.title}</p>
      <Link href={`/pages/todo/commets/${params.id}`}>Detalhes</Link>
      <br />
      <Link href="/pages/todo">Voltar</Link>
    </div>
  );
}
