import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <Link class="navbar-brand" to="/" style={{ marginLeft: "30px" }}>
        Task
      </Link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              Home{" "}
            </Link>
          </li>
          <li class="nav-item ">
            <Link class="nav-link" to="/detail">
              Users{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
