import React, { useContext, useEffect, useState } from "react";

import useColsAccordingBreakPoints from "../../../hook/useColsAccordingBreakPoints";
import { GridContext } from "../../../context/GridContext/GridContextProvider";
import { GridItemsProps } from "./GridItems.types";
import { throttle } from "../../../services/throttle";

const GridItems: React.FC<GridItemsProps> = ({ children, xs, sm, md, lg, xl }) => {
  const { gap, containerRef } = useContext(GridContext);
  const { currentNumCols } = useColsAccordingBreakPoints({ xs, sm, md, lg, xl });
  const oneColValue = Number(containerRef?.clientWidth) / 8;

  const [classes, setClasses] = useState({
    flex: currentNumCols,
    maxWidth: 100,
    minWidth: 100,
  })
  const updateMaxMinWidth = throttle(() => {
    setClasses({
      flex: currentNumCols,
      maxWidth: oneColValue * currentNumCols,
      minWidth: oneColValue * currentNumCols - gap * 2,
    })
  })

  useEffect(() => {
    updateMaxMinWidth();
    window?.addEventListener('resize', updateMaxMinWidth)
    return () => {
      window?.removeEventListener('resize', updateMaxMinWidth)
    }
  }, [currentNumCols])

  useEffect(() => {
    updateMaxMinWidth();
  }, [])

  return <div style={classes}>{children}</div>;
};

export default GridItems;
