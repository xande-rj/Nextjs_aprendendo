"use client";

import { useState, useEffect } from "react";
import style from "../app/styles/todo.module.css";
import Link from "next/link";

type todos = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos"
        ); // Caminho relativo para a sua API
        const data = await response.json();
        setTodos(data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchTodos();
  }, []); // O segundo argumento [] significa que o efeito só é executado uma vez, semelhante a componentDidMount
  return (
    <div>
      <ul className={style.todo}>
        {todos.map((todo: todos) => (
          <div>
            <li key={todo.id}>
              {todo.title} <br />
              <Link href={`/pages/todo/${todo.id}`}>detalhes</Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}
