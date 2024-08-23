import React from "react";
import { useLoaderData } from "react-router-dom";
import { getUserDetail } from "../api/user";

function UserPage() {
  const userdata = useLoaderData();
  return (
    <>
      <h1 className="page-title">{userdata.name}</h1>
      <div className="page-subtitle">{userdata.email}</div>
      <div>
        <b>Company:</b> {userdata.company.name}
      </div>
      <div>
        <b>Website:</b> {userdata.website}
      </div>
      <div>
        <b>Address:</b> {userdata.address.street}, {userdata.address.suite},{" "}
        {userdata.address.city}
      </div>
    </>
  );
}

function loader({ request: { signal }, params }) {
  return getUserDetail({ signal }, params.userId);
}

export const userItemRoute = {
  loader,
  element: <UserPage />,
};
