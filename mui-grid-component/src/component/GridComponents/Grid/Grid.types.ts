import React from "react";

export interface GridProps {
  children: React.ReactNode;
  container?: boolean;
  item?: boolean;
  gap?: number;
  cols?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  wrap?: "wrap" | "nowrap" | "wrap-reverse";
}
