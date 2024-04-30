import React, { useContext } from "react";

import { GridContext } from "../../../context/GridContext/GridContextProvider";
import { GridItemsProps } from "./GridItems.types";

const GridItems: React.FC<GridItemsProps> = ({ children, cols, containerRef }) => {
  const { gap } = useContext(GridContext);
  const divideRatio = Math.ceil(8 / cols);
  console.log({ divideRatio, cols, inner: window.innerWidth, containerRef });
  const classes = {
    flex: cols,
    // maxWidth: window.innerWidth / divideRatio,
    // minWidth: window.innerWidth / divideRatio - gap * 2,
    maxWidth: containerRef?.current?.clientWidth / divideRatio,
    minWidth: containerRef?.current?.clientWidth / divideRatio - gap * 2,
  };

  return <div style={classes}>{children}</div>;
};

export default GridItems;
