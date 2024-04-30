import React from "react";

export interface GridContextProps {
  children: React.ReactElement;
  gap: number;
  containerRef: React.Ref<HTMLDivElement>;
}
