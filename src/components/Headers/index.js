import React from "react";
import { Row } from "reactstrap";
import classes from "./styles.module.css";

const Headers = ({ count, title }) => {
  return (
    <Row style={{ width: "100%" }}>
      <span className={classes.titles}>
        {count && count + ". "} {title}
        <hr className={classes.lineCss} />
      </span>
    </Row>
  );
};

export default Headers;
