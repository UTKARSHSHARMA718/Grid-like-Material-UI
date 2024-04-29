import React from "react";

import GridItems from "../GridItems/GridItems";
import GridContextProvider from "../../../context/GridContext/GridContextProvider";
import { GridProps } from "./Grid.types";
import styles from "./Grid.module.css";

const Grid:React.FC<GridProps> = ({
  children,
  container,
  item,
  gap = 10,
  cols = 8,
  wrap = "wrap",
}) => {
  const classes = {
    columnGap: gap,
    rowGap: gap,
    flexWrap: wrap,
  };

  if (item && !container) {
    return <GridItems cols={cols}>{children}</GridItems>;
  }

  if (container && !item) {
    return (
      <GridContextProvider gap={gap}>
        <div style={classes} className={styles.container}>
          {children}
        </div>
      </GridContextProvider>
    );
  }

  return <div>{children}</div>;
};

export default Grid;
