import { Route, RouteProps } from "react-router";
import React from "react";

type Props = RouteProps & {
  path: string;
};
export const RootRoute = ({ path, ...props }: Props) => (
  <Route {...props} path={process.env.PUBLIC_URL + path} />
);
