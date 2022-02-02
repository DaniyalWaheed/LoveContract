import React from "react";
import { Row } from "reactstrap";
import Headers from "../../components/Headers";
import PaymentField from "../../components/PaymentField";
import classes from "./styles.module.css";

const PaymentSection = () => {
  return (
    <div className={classes.fourthHeader}>
      <Headers title="Payment" count={"4"} />
      <div style={{ paddingLeft: "100px", paddingTop: "40px" }}>
        <Row>
          <PaymentField
            icon={"/assets/paypal.svg"}
            title="Pay with Credit"
            check
          />
        </Row>
        <Row style={{ paddingTop: "20px" }}>
          <PaymentField
            icon={"/assets/bitcoin.svg"}
            title="Pay with Crypto"
            check={true}
          />
        </Row>
      </div>
    </div>
  );
};

export default PaymentSection;
