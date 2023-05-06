import React from "react";
import logo from '../../assets/image/logo.png'
import "./Thanks.css";

const Thanks = () => {
  return (
    <div className="flex justify-center items-center w-[100%] h-[100vh]">
      <div>
        <img src={logo} alt="" className="mx-auto logo w-10 h-10 ml-64" />
        <p className="font-semibold text-blue-500">Thanks for Login</p>
      </div>
    </div>
  );
};

export default Thanks;
