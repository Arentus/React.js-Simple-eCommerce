import React, { useEffect } from "react";
import { useAuth } from "../context/useAuth";

export const User = () => {
  const api = process.env.REACT_APP_API_URL;

  const { user } = useAuth();

  useEffect(() => {}, [api]);

  return (
    <div>
      {user ? (
        <div>
          Welcome <br /> email: {user.email}
          <br /> name: {user.name}
        </div>
      ) : (
        "You need to log in"
      )}
    </div>
  );
};
