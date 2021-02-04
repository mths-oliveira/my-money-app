import React from "react";

export default ({ path, label, icon, children }) => (
  <li className="treeview">
    <a href={path}>
      <i className={`fa fa-${icon}`}></i> <span>{label}</span>
      <i className="fa fa-angle-left pull-right"></i>
    </a>
    <ul className="treeview-menu">{children}</ul>
  </li>
);
