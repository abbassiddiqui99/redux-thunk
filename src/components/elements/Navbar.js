import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-lg">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Redux Posts
        </Link>

        <div className="" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto"></ul>
          <Link to="/addPost" className="btn btn-dark add-post-icon-custom">
            Add Posts
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
