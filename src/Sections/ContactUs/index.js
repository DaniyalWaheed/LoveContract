import React from "react";
import { Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import Headers from "../../components/Headers";
import classes from "./styles.module.css";

const ContactUs = () => {
  return (
    <>
      <div className={classes.fifthHeader}>
        <Headers title="Contact Us" count={"5"} />
        <div style={{ paddingLeft: "100px", paddingTop: "40px" }}>
          <Row className={classes.fieldContainer}>
            <div>
              <Label className={classes.fieldLabel}>Your name</Label>
            </div>
            <InputGroup className={classes.inputContainer}>
              <InputGroupText className={classes.iconTitle}>
                <img src={"/assets/user-icon.svg"} alt="icon" />
              </InputGroupText>
              <Input placeholder="Name" className={classes.fieldTitle} />
            </InputGroup>
          </Row>

          <Row className={classes.fieldContainer}>
            <div>
              <Label className={classes.fieldLabel}>Email</Label>
            </div>
            <InputGroup className={classes.inputContainer}>
              <InputGroupText className={classes.iconTitle}>
                <img src={"/assets/mail-icon.png"} alt="icon" />
              </InputGroupText>
              <Input placeholder="Email" className={classes.fieldTitle} />
            </InputGroup>
          </Row>

          <Row className={classes.fieldContainer}>
            <div>
              <Label className={classes.fieldLabel}>Contact Reason</Label>
            </div>
            <InputGroup className={classes.inputContainer}>
              <InputGroupText className={classes.iconTitle}>
                <img src={"/assets/mail-icon.png"} alt="icon" />
              </InputGroupText>
              <Input placeholder="Reason" className={classes.fieldTitle} />
            </InputGroup>
          </Row>

          <Row className={classes.fieldContainer}>
            <div>
              <Label className={classes.fieldLabel}>Message</Label>
            </div>
            <InputGroup className={classes.inputContainer}>
              <InputGroupText className={classes.iconTitle}>
                <img src={"/assets/message-icon.svg"} alt="icon" />
              </InputGroupText>
              <Input
                placeholder="Message"
                className={classes.fieldTitle}
                multiple
              />
            </InputGroup>
          </Row>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
