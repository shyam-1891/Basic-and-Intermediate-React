import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { getUsers } from "../api/user";
import { Link } from "react-router-dom";
import { addPostItem } from "../api/post";

function AddPost() {
  const submitform = (data) => {
    // e.preventDefault();
    // const title2 = title.current.value;
    // console.log(data);
    const addpost = addPostItem(data);
    // console.log(addpost);
  };
  const title = useRef();
  const [user, setUser] = useState([]);

  async function fetchUserData() {
    const usesDetails = await getUsers();
    // console.log(usesDetails);
    setUser(usesDetails);
  }

  useEffect(() => {
    // setUser(getUsers());
    // const usesDetails = await getUsers();
    // console.log(usesDetails);
    fetchUserData();
    // console.log(user);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <h1 className="page-title">New Post</h1>
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
              {...register("userId", { required: true })}
            >
              <option value="">--- Select Author ---</option>
              {user &&
                user.map((user) => (
                  <option key={user.id} value={user.id}>
                    {user.name}
                  </option>
                ))}
              {/* <option value="1">Leanne Graham</option>
              <option value="2">Ervin Howell</option>
              <option value="3">Clementine Bauch</option>
              <option value="4">Patricia Lebsack</option>
              <option value="5">Chelsey Dietrich</option>
              <option value="6">Mrs. Dennis Schulist</option>
              <option value="7">Kurtis Weissnat</option>
              <option value="8">Nicholas Runolfsdottir V</option>
              <option value="9">Glenna Reichert</option>
              <option value="10">Clementina DuBuque</option> */}
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
              {...register("body", { required: true })}
            ></textarea>
            {errors.body && (
              <div className="error-message">Body is required.</div>
            )}
          </div>
        </div>
        <div className="form-row form-btn-row">
          <Link className="btn btn-outline" to="/posts">
            Cancel
          </Link>
          <button className="btn">Save</button>
        </div>
      </form>
    </>
  );
}

export default AddPost;
