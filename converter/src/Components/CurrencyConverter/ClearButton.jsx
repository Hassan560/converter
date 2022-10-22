import React from "react";

// material ui
import { Button } from "@mui/material";

import "../../App.css";

const ClearButton = ({ setInputOne, setInputTwo, setText, setText2 }) => {
  const clear = () => {
    setInputOne("");
    setInputTwo("");
    setText("");
    setText2("");
  };

  return (
    <Button variant="outlined" size="small" color="error">
      <h3 onClick={clear}>Clear</h3>
    </Button>
  );
};

export default ClearButton;
