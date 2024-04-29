import React from "react";

export interface ColsProps {
  children: React.ReactElement;
  cols?: number;
}

export type ColsStyle = "1col" | "2col" | "3col" | "4col";
