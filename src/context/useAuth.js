import React, { useState, useContext, createContext } from "react";

const api = process.env.REACT_APP_API_URL;

const authContext = createContext();

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const login = async (data) => {
    return await fetch(api + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("token", res.access_token);
        setUser(res.user);
        return res.user;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const register = async (data) => {
    return await fetch(api + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // localStorage.setItem("token", res.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signout = () => {
    if (user) {
      localStorage.removeItem("token");
      window.location("/");
      setUser(false);
    }
    return;
  };

  return {
    user,
    login,
    register,
    signout,
  };
}
