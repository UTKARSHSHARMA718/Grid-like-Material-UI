import React, { useContext } from "react";

import { GridContext } from "../../../context/GridContext/GridContextProvider";
import { GridItemsProps } from "./GridItems.types";

const GridItems: React.FC<GridItemsProps> = ({ children, cols, }) => {
  const { gap, containerRef } = useContext(GridContext);
  const divideRatio = Math.ceil(8 / cols);
  console.log({ divideRatio, cols, inner: window.innerWidth, containerRef, clientWidth: containerRef?.clientWidth });
  const classes = {
    flex: cols,
    // maxWidth: window.innerWidth / divideRatio,
    // minWidth: window.innerWidth / divideRatio - gap * 2,
    maxWidth: containerRef?.clientWidth / divideRatio,
    minWidth: containerRef?.clientWidth / divideRatio - gap * 2,
  };

  return <div style={classes}>{children}</div>;
};

export default GridItems;
