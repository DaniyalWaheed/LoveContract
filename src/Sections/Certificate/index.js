import React from "react";
import { Col, Input, InputGroup, InputGroupText, Row } from "reactstrap";
import Headers from "../../components/Headers";
// import { certificateTypes } from "../../utils/helper";
import classes from "./styles.module.css";

const CertificateSection = ({ handleRadioChange, certificateTypes }) => {
  return (
    <>
      <div className={classes.thirdHeader}>
        <Headers title="Certificate & Alignment" count={"2"} />
        <div>
          {/* <fieldset id="group1"> */}
          <Row style={{ padding: "20px 100px" }}>
            <Col lg={3}>
              <Row>
                <div className={classes.customRadioFeild}>
                  <input
                    type="radio"
                    name="radio-group"
                    //   defaultChecked={true}
                    value={certificateTypes[0].name}
                    id={certificateTypes[0].id}
                    checked={certificateTypes[0].checked}
                    onChange={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                    onClick={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                  />
                  <label htmlFor={"element.id"} id={"element.id"}>
                    Love Certificate
                  </label>
                </div>
              </Row>
              <Row>
                <div className={classes.customRadioFeild}>
                  <input
                    type="radio"
                    id={certificateTypes[2].id}
                    name="radio-group"
                    checked={certificateTypes[2].checked}
                    onClick={(e) => handleRadioChange("name")}
                    onChange={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                  />
                  <label htmlFor={"element.id"} id={"element.id"}>
                    Marriage Certificate
                  </label>
                </div>
              </Row>

              <Row>
                <div className={classes.customRadioFeild}>
                  <input
                    type="radio"
                    id={certificateTypes[2].id}
                    name="radio-group"
                    checked={certificateTypes[2].checked}
                    onClick={(e) => handleRadioChange("name")}
                    onChange={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                  />
                  <label htmlFor={"element.id"} id={"element.id"}>
                    Marriage Certificate
                  </label>
                </div>
              </Row>
            </Col>

            <Col lg={3}>
              <Row>
                <div className={classes.customRadioFeild}>
                  <input
                    type="radio"
                    name="radio-group"
                    id={certificateTypes[1].id}
                    // checked={certificateTypes[1].checked}
                    onClick={(e) => handleRadioChange("name")}
                    onChange={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                  />
                  <label
                    htmlFor={"element.id"}
                    id={"element.id"}
                    className={classes.cerificateTitle}
                  >
                    Horizontal
                  </label>
                </div>
              </Row>

              <Row>
                <div className={classes.customRadioFeild}>
                  <input
                    type="radio"
                    id={certificateTypes[3].id}
                    //   defaultChecked={true}
                    name="radio-group"
                    // checked={certificateTypes[3].checked}
                    onClick={(e) =>
                      console.log("e") || handleRadioChange("name")
                    }
                    onChange={(e) =>
                      console.log("e") || handleRadioChange(certificateTypes[0])
                    }
                  />
                  <label htmlFor={"element.id"} id={"element.id"}>
                    Verticle
                  </label>
                </div>
              </Row>
            </Col>
          </Row>
        </div>
        <div style={{ paddingTop: "90px" }}>
          <Headers title="Create Certificate" />

          <div className={classes.fieldsContainer}>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/user-icon.svg"} alt="icon" />
                </InputGroupText>
                <Input
                  placeholder="First Name"
                  className={classes.fieldTitle}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/user-icon.svg"} alt="icon" />
                </InputGroupText>
                <Input placeholder="Last Name" className={classes.fieldTitle} />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/user-icon.svg"} alt="icon" />
                </InputGroupText>
                <Input
                  placeholder="Partner Name"
                  className={classes.fieldTitle}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/user-icon.svg"} alt="icon" />
                </InputGroupText>
                <Input placeholder="Contact" className={classes.fieldTitle} />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/mail-icon.png"} alt="icon" />
                </InputGroupText>
                <Input
                  placeholder="Email Address"
                  className={classes.fieldTitle}
                />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/lock-icon.png"} alt="icon" />
                </InputGroupText>
                <Input placeholder="Password" className={classes.fieldTitle} />
              </InputGroup>
            </Row>
            <Row>
              <InputGroup className={classes.inputContainer}>
                <InputGroupText className={classes.iconTitle}>
                  <img src={"/assets/lock-icon.png"} alt="icon" />
                </InputGroupText>
                <Input
                  placeholder="Confirm Password"
                  className={classes.fieldTitle}
                />
              </InputGroup>
            </Row>
          </div>
        </div>

        <div style={{ paddingTop: "90px" }} className={classes.PreviewHeader}>
          <Headers title="Preview" />
          <div className={classes.previewContainer}>
            <img
              className={classes.leftBanner}
              src="/assets/left-preview.png"
              alt="left"
            />
            <img
              className={classes.rightBanner}
              src="/assets/right-preview.png"
              alt="left"
            />

            <img
              className={classes.previewImg}
              src={"/assets/preview.png"}
              alt="preview"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CertificateSection;
