import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 Page NotFound</h1>
      <Link to="/posts">Back to homepage</Link>
    </>
  );
}
