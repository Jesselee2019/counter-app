import React, { Component } from "react";

const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav class="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
