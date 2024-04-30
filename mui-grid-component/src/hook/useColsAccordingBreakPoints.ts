import { useEffect, useState } from "react";
import useWindowDimension from "../hook/useWindowDimension";

interface getColsAccordingBreakPointsProps {
  xs: number | undefined;
  sm: number | undefined;
  md: number | undefined;
  lg: number | undefined;
  xl: number | undefined;
}

const useColsAccordingBreakPoints = ({
  xs = 8,
  sm = 8,
  md = 8,
  lg = 8,
  xl = 8,
}: getColsAccordingBreakPointsProps) => {
  const [currentNumCols, setCurrentNumCols] = useState(8);
  const { windowSize } = useWindowDimension();

  const getColsAccordingBreakPoints = () => {
    const { width } = windowSize;
    let breakPoint = 0;
    if (width < 600) {
      breakPoint = xs;
    } else if (width >= 600 && width < 900) {
      breakPoint = sm;
    } else if (width >= 900 && width < 1200) {
      breakPoint = md;
    } else if (width >= 1200 && width < 1536) {
      breakPoint = lg;
    } else {
      breakPoint = xl;
    }
    setCurrentNumCols(breakPoint);
  };

  useEffect(() => {
    getColsAccordingBreakPoints();
  }, [windowSize?.width]);

  return { currentNumCols };
};

export default useColsAccordingBreakPoints;
