import React, { useEffect, useState } from "react";

// components
import DropDownButton from "../DropDown/DropDownButton";
import ConvertButton from "../Button/ConvertButton";
import ClearButton from "../ClearButton";
import DateButton from "../DateButton";

//material ui
import { TextField } from "@mui/material";

import styles from "./InputButton.module.css";

const Input = () => {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");
  const [country, setCountry] = useState([]);
  const [country2, setCountry2] = useState([]);
  const [dropValue, setDropValue] = useState("");
  const [dropValue2, setDropValue2] = useState("");
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [getDate, setGetDate] = useState();

  useEffect(() => {
    fetch(`https://api.exchangerate.host/${getDate}`)
      .then((res) => res.json())
      .then((result) => {
        setCountry(result.rates);
        setCountry2(result.rates);
      })
      .catch((err) => console.log(err));
  }, [getDate]);

  return (
    <>
      <div className={styles.input}>
        <TextField
          fullWidth
          type="number"
          label="Amount"
          placeholder="Enter the amount"
          size="small"
          autoComplete="Off"
          onChange={(e) => setInputOne(e.target.value)}
          value={inputOne || text}
        />
      </div>
      <div className={styles.dropDown}>
        <DropDownButton
          country={country}
          country2={country2}
          setDropValue={setDropValue}
          setDropValue2={setDropValue2}
          dropValue={dropValue}
          dropValue2={dropValue2}
        />
      </div>
      <div className={styles.input2}>
        <TextField
          fullWidth
          type="number"
          label="Amount"
          size="small"
          placeholder="Enter the amount"
          autoComplete="Off"
          onChange={(e) => setInputTwo(e.target.value)}
          value={inputTwo || text2}
        />
      </div>
      <div>
        <ConvertButton
          dropValue={dropValue}
          dropValue2={dropValue2}
          inputOne={inputOne}
          inputTwo={inputTwo}
          setText={setText}
          setText2={setText2}
        />
      </div>
      <div className={styles.footer}>
        <ClearButton
          setInputOne={setInputOne}
          setInputTwo={setInputTwo}
          setText={setText}
          setText2={setText2}
        />
        <DateButton getDate={getDate} setGetDate={setGetDate} />
      </div>
    </>
  );
};

export default Input;
