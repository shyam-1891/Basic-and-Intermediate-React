import React from "react";
import { Link } from "react-router-dom";

function Post({ title, body, id }) {
  return (
    <div className="card" attr-index={id}>
      <div className="card-header">{title}</div>
      <div className="card-body">
        <div className="card-preview-text">{body}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/posts/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}

export default Post;
