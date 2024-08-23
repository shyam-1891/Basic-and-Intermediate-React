import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getUsers } from "../api/user";
import {
  Link,
  Navigate,
  redirect,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { editPostItem, getPostItem } from "../api/post";

function EditPost() {
  const navigate = useNavigate();
  const submitform = async (data) => {
    // e.preventDefault();
    // const title2 = title.current.value;
    const postId = post.id;
    // console.log(data);

    const editpost = await editPostItem(data, postId);
    navigate(`/posts/${post.id}`);
    // return redirect(`/posts/${post.id}`);
  };
  const title = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { post, users } = useLoaderData();
  // console.log(post);
  // console.log(users);

  return (
    <>
      <h1 className="page-title">Edit Post</h1>
      <form
        onSubmit={handleSubmit((data) => submitform(data))}
        className="form"
      >
        <div className="form-row">
          <div className={errors.title ? `form-group error` : `form-group`}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              id="title"
              ref={title}
              defaultValue={post.title}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <div className="error-message">Title is required.</div>
            )}
          </div>
          <div className={errors.userId ? `form-group error` : `form-group`}>
            <label htmlFor="userId">Author</label>
            <select
              name="userId"
              id="userId"
              defaultValue={post.userId}
              {...register("userId", { required: true })}
            >
              {/* <option value="">--- Select Author ---</option> */}
              {users &&
                users.map((user) => (
                  <option
                    key={user.id}
                    value={user.id}
                    // selected={user.id === post.userId ? "selected" : ""}
                  >
                    {user.name}
                  </option>
                ))}
            </select>
            {errors.userId && (
              <div className="error-message">Author is required.</div>
            )}
          </div>
        </div>
        <div className="form-row">
          <div className={errors.body ? `form-group error` : `form-group`}>
            <label htmlFor="body">Body</label>
            <textarea
              name="body"
              id="body"
              defaultValue={post.body}
              {...register("body", { required: true })}
            ></textarea>
            {errors.body && (
              <div className="error-message">Body is required.</div>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="..">
            Cancel
          </Link>
          <button className="btn">Save</button>
        </div>
      </form>
    </>
  );
}

async function loader({ request: { signal }, params }) {
  const post = getPostItem({ signal }, params.postId);
  const users = getUsers({ signal });

  return { post: await post, users: await users };
}

async function action() {}

export const editPostRoute = {
  loader,
  action,
  element: <EditPost />,
};
