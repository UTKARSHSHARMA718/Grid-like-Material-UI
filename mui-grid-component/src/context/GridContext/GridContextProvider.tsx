import { createContext } from "react";
import { GridContextProps } from "./GridContext.types";

const initialState = {
  gap: 10,
};

export const GridContext = createContext(initialState);

const GridContextProvider:React.FC<GridContextProps> = ({ children, gap }) => {
  return (
    <GridContext.Provider value={{ gap }}>{children}</GridContext.Provider>
  );
};

export default GridContextProvider;
