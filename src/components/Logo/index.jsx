import React from "react";
import logo from "../../assets/images/logo.svg";
import simpleImage from "../../assets/images/simple-logo.svg";
import "./logo.css";

function Logo({ simple }) {
  const src = simple ? simpleImage : logo;

  return <img className="logo" src={src} alt="Logo da CollabChat" />;
}

export default Logo;
