import React from "react";

export interface GridItemsProps {
  children: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  containerRef: HTMLDivElement | null;
}
