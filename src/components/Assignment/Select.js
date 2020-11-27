import React from "react";
import "./Select.scss";

// import { flavourOptions } from '../data';
import Select from "react-select";

export default () => (
  <Select
    styles={{ backgroundColor: "hsl(185deg 24% 28%)" }}
    // defaultValue={flavourOptions[2]}
    label="Single select"
    // options={flavourOptions}
    theme={(theme) => ({
      ...theme,
      borderRadius: 0,

      backgroundColor: "hsl(185deg 24% 28%)",
      colors: {
        ...theme.colors,
        primary25: "hotpink",
        primary: "black",
      },
    })}
  />
);
