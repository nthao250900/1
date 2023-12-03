import React from "react";
import { StyleContainer } from "./style";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyleContainer>{children}</StyleContainer>;
};

export default Container;
