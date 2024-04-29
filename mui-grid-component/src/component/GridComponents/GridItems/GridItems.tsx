import React, { useContext } from "react";

import { GridContext } from "../../../context/GridContext/GridContextProvider";
import { GridItemsProps } from "./GridItems.types";

const GridItems: React.FC<GridItemsProps> = ({ children, cols }) => {
  const { gap } = useContext(GridContext);
  const divideRatio = 8 / cols;
  const classes = {
    flex: cols,
    maxWidth: window.innerWidth / divideRatio,
    minWidth: window.innerWidth / divideRatio - gap * 2,
  }

  return <div style={classes}>{children}</div>;
};

export default GridItems;
