import React from "react";
import TodoList from "../../../api/todolistapi";



export default function page() {
  return (
    <div>
      <h1>Coisas a fazer</h1>
   <TodoList />
  </div>
  );
}

