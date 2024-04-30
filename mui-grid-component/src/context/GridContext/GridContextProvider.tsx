import { createContext } from "react";
import { GridContextProps } from "./GridContext.types";

const initialState = {
  gap: 10,
  containerRef: null,
};

export const GridContext = createContext(initialState);

const GridContextProvider: React.FC<GridContextProps> = ({ children, gap, containerRef }) => {
  
  return (
    <GridContext.Provider value={{ gap, containerRef }}>{children}</GridContext.Provider>
  );
};

export default GridContextProvider;
