import React from "react";
import classes from "./styles.module.css";

const HeartShape = ({ count }) => {
  return <div className={classes.heartCss}>{count}</div>;
};
export default HeartShape;
