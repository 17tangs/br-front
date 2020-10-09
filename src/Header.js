import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header (props) {
  return (
    <div className="flex justify-start container">
      <div className="flex vertical-text">
        <div className="line-bottom"></div>
        <div className="searchIcon" onClick={props.clickSearch} />
        <Link className="no-underline ph3 nav" to="/apply">
          apply
        </Link>
        <Link className="no-underline ph3 nav" to="/info">
          info
        </Link>
        <Link className="no-underline ph3 nav" to="/print">
          print
        </Link>
        <Link className="no-underline ph3 nav" to="/">
          home
        </Link>
        <div className="line-top"></div>
      </div>
    </div>
  );
}
