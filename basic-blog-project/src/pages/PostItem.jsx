import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getPostItem } from "../api/post";

function PostItem() {
  const postdata = useLoaderData();
  // console.log(postdata);
  return (
    <>
      <h1 className="page-title">
        {postdata.title}{" "}
        <div className="title-btns">
          <Link className="btn btn-outline" to={`/posts/${postdata.id}/edit`}>
            Edit
          </Link>
        </div>
      </h1>
      <div>{postdata.body}</div>
    </>
  );
}

function loader({ request: { signal }, params }) {
  return getPostItem({ signal }, params.postId);
}

export const postItemRoute = {
  loader,
  element: <PostItem />,
};
