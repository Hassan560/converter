import React from "react";

// components
import Header from "../CurrencyConverter/Header";
import InputButton from "../CurrencyConverter/Input/InputButton";

// material ui
import { Divider } from "@mui/material";

import "../../App.css";

const CurrencyConverter = () => {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <Divider sx={{ borderWidth: 1 }} />
      <div className="content">
        <InputButton />
      </div>
    </div>
  );
};

export default CurrencyConverter;
