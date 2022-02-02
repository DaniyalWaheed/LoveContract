import React from "react";
import classes from "./styles.module.css";
import { Row } from "reactstrap";
import Headers from "../../components/Headers";

const InstructionSection = ({ instructions }) => {
  return (
    <>
      <Row className={classes.secondHeader}>
        <img
          className={classes.hearts_back_img}
          src="/assets/hearts-back.svg"
          alt="hearts"
        />
        <Headers title="Instruction" count={"1"} />
        <Row style={{ paddingLeft: "90px" }}>
          {instructions.map((item) => {
            return (
              <Row style={{ width: "100%" }}>
                <img className={classes.checkedIcon} src={item.icon} alt="" />
                <div className={classes.arrow}>
                  <span className={classes.instructionValueCss}>
                    {item.title}
                  </span>
                </div>
              </Row>
            );
          })}
        </Row>
      </Row>
    </>
  );
};

export default InstructionSection;
