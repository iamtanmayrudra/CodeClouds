import React from 'react'

// Image Import
import logo from "../../../assets/codeclouds-logo.svg";


function Logo() {
  return (
    <>
      <a href="/">
        <img src={logo} alt="Logo" width="230"/>
      </a>
    </>
  );
}

export default Logo