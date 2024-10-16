import { useLoaderData } from "react-router-dom";
import Todo from "./Todo";

interface Todo {
  userId?: number,
  id: number,
  title: string
  completed: boolean
}

export default function Todos() {
  const todosData = useLoaderData() as Todo[]

  const allTodos = todosData.map(todo => <Todo key={todo.id} id={todo.id} completed={todo.completed} title={todo.title}/>)
  console.log(todosData)

  return (
    <>
      <h1>Todos</h1>
      <div className="todos">
        {allTodos}
      </div>
    </>
  );
}
