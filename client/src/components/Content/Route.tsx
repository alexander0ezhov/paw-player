import React from "react";

import Pages from "@root/pages";
import { Routes } from "@root/global-types";

const Route: React.FC<{ route: keyof typeof Routes }> = ({ route }) => {
  return Pages[route]({});
};

export default Route;
