import React from "react";

import { Route, Redirect } from "react-router-dom";

import { useSelector } from "react-redux";

export const ProtectedRoute = ({ component: Component, ...restOfProps }) => {
  const isLoggedIn = useSelector((state) => state.root.isLoggedIn);
  console.log(isLoggedIn);
  return (
    <Route
      {...restOfProps}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};
