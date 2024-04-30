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

    if (width < 600) {
      return setCurrentNumCols(xs);
    } else if (width >= 600 && width < 900) {
      return setCurrentNumCols(sm);
    } else if (width >= 900 && width < 1200) {
      return setCurrentNumCols(md);
    } else if (width >= 1200 && width < 1536) {
      return setCurrentNumCols(lg);
    } else {
      return setCurrentNumCols(xl);
    }
  };

  useEffect(() => {
    getColsAccordingBreakPoints();
  }, [windowSize?.width]);

  return { currentNumCols };
};

export default useColsAccordingBreakPoints;
