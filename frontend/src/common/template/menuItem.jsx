import React from "react";
import { Link } from "react-router";

export default ({ path, label, icon }) => (
  <li>
    <Link to={path}>
      <i className={`fa fa-${icon}`}></i> <span>{label}</span>
    </Link>
  </li>
);
