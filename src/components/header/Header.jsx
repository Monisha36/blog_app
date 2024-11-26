import React from "react";
import logo from "../../assets/images/logo.svg";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="container flex">
          <div className="logo">
          </div>
          <nav>
            <ul className="nav-links">
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url} className="nav-link">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="account flexCenter">
            <User />
          </div>
        </div>
      </header>
    </>
  );
};
