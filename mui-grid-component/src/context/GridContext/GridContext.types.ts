import React from "react";

export interface GridContextProps {
  children: React.ReactElement;
  gap: number;
  containerRef: HTMLDivElement | null;
}

export type GridContextValue = Omit<GridContextProps, "children">;
