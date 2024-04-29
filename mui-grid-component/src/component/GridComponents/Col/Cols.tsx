import React from "react";
import { ColsProps, ColsStyle } from "./Col.types";

const Cols: React.FC<ColsProps> = ({ children, cols = 4 }) => {
  const classes = {
    "1col": {
      flex: 1,
      maxWidth: "25%",
    },
    "2col": {
      flex: 2,
      maxWidth: "50%",
    },
    "3col": {
      flex: 3,
      maxWidth: "75%",
    },
    "4col": {
      flex: 4,
      maxWidth: "100%",
    },
  };

  return <div style={classes[`${cols}col` as ColsStyle]}>{children}</div>;
};

export default Cols;
