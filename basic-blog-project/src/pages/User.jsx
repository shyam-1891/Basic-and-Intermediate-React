import React from "react";
import { Link } from "react-router-dom";

function User({ name, id, email, username, address }) {
  return (
    <>
      <div className="card">
        <div className="card-header">{name}</div>
        <div className="card-body">
          <div>{username}</div>
          <div>{email}</div>
          <div>{address.city}</div>
        </div>
        <div className="card-footer">
          <Link className="btn" to={`/users/${id}`}>
            View
          </Link>
        </div>
      </div>
    </>
  );
}

export default User;
