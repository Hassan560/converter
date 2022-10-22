import React from "react";

import { TextField } from "@mui/material";

const DateButton = ({getDate,setGetDate}) => {
  return (
    <div>
      <TextField
        type="date"
        size="small"
        color="success"
        onChange={(e) => setGetDate(e.target.value)}
        value={getDate}
      />
    </div>
  );
};

export default DateButton;
