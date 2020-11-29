import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import Spinner from "react-bootstrap/Spinner";
export const PrivateRoute = ({ component: Component, path }) => {
  const { user, loading } = useAuth();
  return (
    <Route
      path={path}
      render={(props) =>
        !loading ? (
          user ? (
            <Component {...props} />
          ) : (
            <Redirect to="/signin" />
          )
        ) : (
          <Spinner animation="border" variant="primary" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        )
      }
    />
  );
};
