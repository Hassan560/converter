import React from "react";

//material ui
import { Button } from "@mui/material";

import styles from "./ConvertButton.module.css";

const ConvertButton = ({
  dropValue,
  dropValue2,
  inputOne,
  inputTwo,
  setText,
  setText2
}) => {
  const convert = () => {
    let result = (dropValue2 / dropValue) * inputOne;
    let result2 = (dropValue / dropValue2) * inputTwo;
    setText2(result);
    setText(result2);
  };

  return (
    <div className={styles.btn}>
      <Button
        fullWidth
        style={{ backgroundColor: "#168aad", color: "white" }}
        onClick={convert}
      >
        <h4>Converter</h4>
      </Button>
    </div>
  );
};

export default ConvertButton;
