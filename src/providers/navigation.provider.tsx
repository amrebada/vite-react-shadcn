import * as React from "react";
import { RouterProvider } from "react-router-dom";
import { routes } from "@/routes";

export const NavigationProvider: React.FunctionComponent = () => {
  return <RouterProvider router={routes} />;
};
