import React, { useRef } from "react";

import GridItems from "../GridItems/GridItems";
import GridContextProvider from "../../../context/GridContext/GridContextProvider";
import { GridProps } from "./Grid.types";
import styles from "./Grid.module.css";

const Grid: React.FC<GridProps> = ({
  children,
  container,
  item,
  gap = 10,
  cols = 8,
  wrap = "wrap",
}) => {
  const containerRef = useRef();
  const classes = {
    columnGap: gap,
    rowGap: gap,
    flexWrap: wrap,
  };

  if (container && !item) {
    return (
      <GridContextProvider gap={gap}>
        <div style={classes} className={styles.container} ref={containerRef}>
          {children}
        </div>
      </GridContextProvider>
    );
  }

  if (item && !container) {
    return (
      <GridItems cols={cols} {...{ containerRef }}>
        {children}
      </GridItems>
    );
  }

  return <div>{children}</div>;
};

export default Grid;
