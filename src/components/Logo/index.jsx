import { bool } from "prop-types";
import React from "react";
import logo from "../../assets/images/logo.svg";
import simpleImage from "../../assets/images/simple-logo.svg";
import "./logo.css";

function Logo({ simple = false }) {
  const src = simple ? simpleImage : logo;

  return <img className="logo" src={src} alt="Logo da CollabChat" />;
}

Logo.defaultProps = {
  simple: false,
};

Logo.propTypes = {
  simple: bool,
};

export default Logo;
