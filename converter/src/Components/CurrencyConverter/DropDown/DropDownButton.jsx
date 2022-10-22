import React from "react";

// matarial ui
import { Select } from "@mui/material";

const DropDownButton = ({
  country,
  country2,
  setDropValue,
  setDropValue2,
  dropValue,
  dropValue2,
}) => {
  return (
    <>
      <Select
        onChange={(e) => setDropValue(e.target.value)}
        value={dropValue}
        native
      >
        {Object.keys(country).map((elem, index) => {
          return (
            <option key={index} value={country[elem]}>
              {elem}
            </option>
          );
        })}
      </Select>
      <h3 style={{ textAlign: "center" }}>TO</h3>

      <Select
        onChange={(e) => setDropValue2(e.target.value)}
        value={dropValue2}
        native
      >
        {Object.keys(country2).map((elem, index) => {
          return (
            <option key={index} value={country[elem]}>
              {elem}
            </option>
          );
        })}
      </Select>
    </>
  );
};

export default DropDownButton;
