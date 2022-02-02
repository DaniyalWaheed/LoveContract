import React, { Component } from "react";
import { Col, Row } from "reactstrap";
import CertificateSection from "../Sections/Certificate";
import ContactUs from "../Sections/ContactUs";
import InstructionSection from "../Sections/Instruction";
import PaymentSection from "../Sections/Payment";
import { certificateTypes } from "../utils/helper";
import classes from "./styles.module.css";

const socials = [
  {
    id: 1,
    name: "Youtube",
    url: "/assets/Socials/youtube-icon.svg",
  },
  {
    id: 2,
    name: "Instagram",
    url: "/assets/Socials/instagram-icon.svg",
  },
  {
    id: 3,
    name: "Facebook",
    url: "/assets/Socials/fb-icon.svg",
  },
  {
    id: 4,
    name: "Skype",
    url: "/assets/Socials/skype-icon.svg",
  },
];

const instructions = [
  {
    id: 1,
    icon: "/assets/checked.svg",
    title: "Unlimited Likes",
  },
  {
    id: 2,
    icon: "/assets/checked.svg",
    title: "See Who Likes You",
  },
  {
    id: 3,
    icon: "/assets/checked.svg",
    title: "Match Anywhere",
  },
  {
    id: 4,
    icon: "/assets/checked.svg",
    title: "Additional Matches",
  },
  {
    id: 5,
    icon: "/assets/checked.svg",
    title: "Rewind Features",
  },
  {
    id: 6,
    icon: "/assets/checked.svg",
    title: "Data Setup Features",
  },
];

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleRadioChange = (e) => {
    console.log("e:", e, e.target.value);
  };

  render() {
    return (
      <div className={classes.container}>
        <Row style={{ justifyContent: "space-evenly" }}>
          <Col lg={{ size: 1, offset: 3 }} />
          {socials.map((item) => {
            return (
              <div className={classes.socialContainer} key={item.id}>
                <img
                  className={classes.socialIcon}
                  alt="socialsIcon"
                  src={item.url}
                />
              </div>
            );
          })}
        </Row>
        <Row className={classes.firstHeader}>
          <img
            className={classes.firstHeaderImg}
            src="/assets/first-header-logo.png"
            alt="firstHeader"
          />
          <div className={classes.curlContainer}>
            <img
              className={classes.urlStyles}
              src={"/assets/curl.svg"}
              alt="curl"
            />
          </div>
        </Row>

        <InstructionSection instructions={instructions} />

        <CertificateSection
          handleRadioChange={this.handleRadioChange}
          certificateTypes={certificateTypes}
        />

        <PaymentSection />

        <ContactUs />

        {/* <HeartShape count={1} /> */}
      </div>
    );
  }
}

export default LandingPage;
