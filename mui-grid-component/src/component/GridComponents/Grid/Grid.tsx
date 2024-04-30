import React, { Ref, useState } from "react";

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
  const [containerRef, setContainerRef] = useState<Ref<HTMLDivElement>>(null);
  const classes = {
    columnGap: gap,
    rowGap: gap,
    flexWrap: wrap,
  };

  if (container && !item) {
    console.log("inside container", { containerRef, val: containerRef?.clientWidth })
    return (
      <GridContextProvider gap={gap} containerRef={containerRef}>
        <div id="grid-container" style={classes} className={styles.container} ref={(refValue) => setContainerRef(refValue)}>
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
