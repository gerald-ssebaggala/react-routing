interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

export default function Todo({ id, title, completed }: TodoProps) {
  return (
    <ul className="todos-list" key={id}>
      <li className={completed ? "todo" : "finished"}>{title}</li>
    </ul>
  );
}

