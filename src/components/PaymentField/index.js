import React from "react";
import classes from "./styles.module.css";

const PaymentField = ({ icon, title, check = false }) => {
  return (
    <div className={classes.payemntContainer}>
      <img className={classes.paymentIcon} src={icon} alt="payment" />
      <span className={classes.paymentTitle}>{title}</span>

      <div className={classes.radioParent}>
        <div className={classes.customRadioFeild}>
          <input
            type="radio"
            //   id={certificateTypes[2].id}
            name="radio-group"
            checked={false}
            //   onClick={(e) => handleRadioChange("name")}
            //   onChange={(e) =>
            //     console.log("e") || handleRadioChange(certificateTypes[0])
            //   }
          />
          <label htmlFor={"payment"} id={"payment"}></label>
        </div>
      </div>
    </div>
  );
};

export default PaymentField;
