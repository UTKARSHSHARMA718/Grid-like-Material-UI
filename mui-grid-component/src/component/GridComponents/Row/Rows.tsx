import React from "react";

import styles from "./Rows.module.css";
import { RowProps } from "./Rows.types";

const Rows:React.FC<RowProps> = ({ children, gap = 5 }) => {
  const classes = {
    columnGap: gap,
  };

  return (
    <div style={classes} className={styles.container}>
      {children}
    </div>
  );
};

export default Rows;
