import React from "react";
import littlelemon_logo from "../images/littlelemon_logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={littlelemon_logo} alt="Little Lemon Logo"></img>
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/reservations">Reservations</Link>
          </li>
          <li>
            <Link to="/booking">Order Online</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
