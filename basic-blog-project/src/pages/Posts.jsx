import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link, useLoaderData } from "react-router-dom";
import { getPosts } from "../api/post";
import PostFilter from "../components/PostFilter";
import { getUsers } from "../api/user";

function Posts() {
  // const [postlist, setPostlist] = useState([]);

  const {
    postlist,
    user,
    searchParams: { query, userId },
  } = useLoaderData();

  // useEffect(() => {
  //   queryRef.current.value = query || "";
  // }, [query]);

  // useEffect(() => {
  //   userIdRef.current.value = userId || "";
  // }, [userId]);

  // console.log(postlist);

  // useEffect(() => {
  //   const postdata = fetch("http://127.0.0.1:3000/posts")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       setPostlist(json);
  //     });
  // }, []);
  return (
    <>
      <h1 className="page-title">
        Posts{" "}
        <div className="title-btns">
          <Link className="btn btn-outline" to="/posts/new">
            New
          </Link>
        </div>
      </h1>

      <PostFilter users={user} query={query} userId={userId} />

      <div className="card-grid">
        {postlist.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </div>
    </>
  );
}

async function loader({ request: { signal, url } }) {
  const searchParams = new URL(url).searchParams;
  const query = searchParams.get("query");
  const userId = searchParams.get("userId");
  const filterParams = { q: query };
  if (userId !== "") filterParams.userId = userId;

  const postlist = getPosts({ signal, params: filterParams });
  const user = getUsers({ signal });

  return {
    postlist: await postlist,
    user: await user,
    searchParams: { query, userId },
  };
  // const postdata = getPosts({ signal });
  // console.log(postdata);
  // return [{ id: 1, title: "post 1", body: "post 1 body" }];
}

export const postListRoute = {
  loader,
  element: <Posts />,
};
