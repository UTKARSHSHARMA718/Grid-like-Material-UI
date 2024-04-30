import React from "react";

export interface GridItemsProps {
  children: React.ReactNode;
  cols: number;
  containerRef: React.Ref<HTMLDivElement>;
}
