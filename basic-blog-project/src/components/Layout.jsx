import React from "react";
import Navbar from "./Navbar";
import { Outlet, ScrollRestoration, useNavigation } from "react-router-dom";

function Layout({ childern }) {
  const { state } = useNavigation();

  const isLoading = state === "loading";
  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <div className={`main-content container ${isLoading ? "loading" : ""}`}>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
