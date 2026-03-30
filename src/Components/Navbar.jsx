import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import gitLogo from "../assets/github-icon.png";

const Navbar = () => {
  return (
    <div className="navbar px-16 py-4 bg-white border-b-[#E9E9E9] border-b-1">
      <div className="navbar-start gap-5">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/home" className="text-lg font-semibold">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/apps" className="text-lg font-semibold">
                Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/installation" className="text-lg font-semibold">
                Installation
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-10" />
          <h1 className="text-lg font-bold bg-gradient-to-br from-[#632EE3] to-[#9F62FF] bg-clip-text text-transparent">
            HERO.IO
          </h1>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-8">
          <li>
            <NavLink to="/home" className="text-lg font-semibold">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/apps" className="text-lg font-semibold">
              Apps
            </NavLink>
          </li>
          <li>
            <NavLink to="/installation" className="text-lg font-semibold">
              Installation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="inline-block bg-gradient-to-br from-[#632EE3] to-[#9F62FF] bg-clip px-5 py-3 rounded-lg">
          <Link to="http://github.com/emran40989" className="text-lg flex items-center gap-2"
          >
            <img src={gitLogo} alt="GitHub" className="w-5" />
            <h1 className="text-lg font-semibold text-white">Contribute</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
