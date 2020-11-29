import React, { useState, useContext, createContext, useEffect } from "react";

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      checkAuth().then((res) => setLoading(false));
    }
  }, [user]);

  const checkAuth = async () => {
    // no token provided or user already checked prevents to make unwanted requests
    if (!localStorage.getItem("token") || user !== null) {
      return;
    }

    return await fetch(api + "/user-profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
        return res;
      })
      .catch((err) => {
        return err;
      });
  };

  // login
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
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  // register
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
        window.location("/login");

        // localStorage.setItem("token", res.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // logout
  const logout = () => {
    if (user) {
      localStorage.removeItem("token");
      setUser(null);
    }
    return;
  };

  return {
    user,
    loading,
    login,
    register,
    logout,
  };
}
