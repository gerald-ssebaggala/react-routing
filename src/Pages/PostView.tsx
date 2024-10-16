import { Link, useLoaderData, useParams } from "react-router-dom";

export default function PostView() {
  const params = useParams();
  const postData = useLoaderData();
  console.log(postData, params);

  return (
    <div className="post-view">
      <h2 className="post-title">aaaaaaasdfdfdfdfdfdf</h2>

      <div>
        <span>
          By:
          <Link to="">asdfasf</Link>
        </span>
        <p className="post-body post-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quidem
          odit placeat, libero quam autem, eligendi quo modi exercitationem quas
          dignissimos, dicta quia expedita incidunt ipsum aspernatur itaque
          impedit rem!
        </p>
      </div>

      <div className="post-comments">
        <h3 className="title">Comments</h3>
        <div className="comment">
          <span className="email">aaadfdfg@hdhdhd</span>
          <p className="comment-body">
            lgfgfgfgfgfsdfgsdfjkldfhshgkjjkfsdfgfglfjgsjjdfg
          </p>
        </div>
      </div>
    </div>
  );
}
