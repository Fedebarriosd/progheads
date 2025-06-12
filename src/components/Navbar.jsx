import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar-custom">
      <NavLink
        to="/"
        className="navbar-link"
        end
      >
        Inicio
      </NavLink>
      <NavLink
        to="/about_us"
        className="navbar-link"
      >
        Sobre nosotros
      </NavLink>
    </nav>
  );
}
