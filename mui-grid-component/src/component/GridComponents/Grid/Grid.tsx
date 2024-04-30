import React, { useState } from "react";

import GridItems from "../GridItems/GridItems";
import GridContextProvider from "../../../context/GridContext/GridContextProvider";
import { GridProps } from "./Grid.types";
import styles from "./Grid.module.css";

const Grid: React.FC<GridProps> = ({
  children,
  container,
  item,
  gap = 10,
  xs = 8,
  sm = 8,
  md = 8,
  lg = 8,
  xl = 8,
  wrap = "wrap",
}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement|null>(null);
  const classes = {
    columnGap: gap,
    rowGap: gap,
    flexWrap: wrap,
  };

  if (container && !item) {
    return (
      <GridContextProvider {...{ gap, containerRef }}>
        <div id="grid-container" style={classes} className={styles.container} ref={(refValue) => setContainerRef(refValue)}>
          {children}
        </div>
      </GridContextProvider>
    );
  }

  if (item && !container) {
    return (
      <GridItems {...{
        xs,
        sm,
        md,
        lg,
        xl
      }} {...{ containerRef }}>
        {children}
      </GridItems>
    );
  }

  return <div>{children}</div>;
};

export default Grid;
