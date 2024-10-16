import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <header>
      <Link to="/posts">MyApp</Link>
      <nav className="nav">
        <Link to="/posts">Posts</Link>
        <Link to="/users">Users</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </header>
  );
}
