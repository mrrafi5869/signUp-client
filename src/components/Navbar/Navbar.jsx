import React from "react";
import logo from "../../assets/image/logo.png";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 lg:w-9/12 mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Get started</a>
            </li>
            <li>
              <a>Features</a>
            </li>
            <li>
              <a>Tools</a>
            </li>
            <li>
              <a>Services</a>
            </li>
            <li>
              <a>Log In</a>
            </li>
          </ul>
        </div>
        <img className="w-8 lg:w-12 h-8 lg:h-12 mr-5" src={logo} alt="" />
        <input className="input input-bordered w-full max-w-xs hidden lg:block" type="text" placeholder="Search Job" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold rounded-t-sm transition-all hover:bg-indigo-400 hover:text-white hover:border-b-4 border-blue-400">
            <a>Get started</a>
          </li>
          <li className="font-semibold rounded-t-sm transition-all hover:bg-indigo-400 hover:text-white hover:border-b-4 border-blue-400">
            <a>Features</a>
          </li>
          <li className="font-semibold rounded-t-sm transition-all hover:bg-indigo-400 hover:text-white hover:border-b-4 border-blue-400">
            <a>Tools</a>
          </li>
          <li className="font-semibold rounded-t-sm transition-all hover:bg-indigo-400 hover:text-white hover:border-b-4 border-blue-400">
            <a>Services</a>
          </li>
          <li className="font-semibold rounded-t-sm transition-all hover:bg-indigo-400 hover:text-white hover:border-b-4 border-blue-400">
            <a>Log In</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <btn className="btn btn-primary btn-sm lg:btn-md rounded-none lg:w-28">Sign Up</btn>
      </div>
    </div>
  );
};

export default Navbar;
