import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/">MyApp</Link>
      <nav className="nav">
        <Link to="/">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </header>
  );
}
