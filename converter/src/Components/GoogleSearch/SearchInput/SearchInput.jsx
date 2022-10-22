import React, { useState } from "react";

// material ui
import { TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

// components
import GoogleApi from "../GoogleApi/GoogleApi";

import styles from "./SearchInput.module.css";

const SearchInput = () => {
  const [countryName, setCountryName] = useState("");

  return (
    <>
      <div className={styles.search__input}>
        <LocationOnIcon />
        <TextField
          fullWidth
          label="Search Here"
          size="small"
          type="search"
          variant="filled"
          autoComplete="Off"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
      </div>
      <GoogleApi/>
    </>
  );
};

export default SearchInput;
