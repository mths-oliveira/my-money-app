import React from "react";
import Grid from "../layout/grid";

export default ({ cols, color, value, text, icon }) => (
  <Grid cols={cols}>
    <div className={`small-box bg-${color}`}>
      <div className="inner">
        <h3>{value}</h3>
        <p>{text}</p>
      </div>
      <div className="icon">
        <i className={`fa fa-${icon}`}></i>
      </div>
    </div>
  </Grid>
);
