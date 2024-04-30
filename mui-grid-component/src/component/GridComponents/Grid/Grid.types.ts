import React from "react";

export interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  gap?: number;
  xs?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  sm?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  md?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  lg?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  xl?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}
