import { Link } from "react-router-dom";

interface PostProps {
  id: number;
  title: string;
  body: string;
}

export default function Post({ id, title, body }: PostProps) {
  return (
    <div className="post-card" key={id}>
      <h3 className="post-title">
        {title.length <= 30 ? title : `${title.slice(0, 30)}...`}
      </h3>
      <p className="post-content">
        {body.length <= 190 ? body : `${body.slice(0, 190)}...`}
      </p>
      <Link to="" className="view-btn">
        View
      </Link>
    </div>
  );
}
