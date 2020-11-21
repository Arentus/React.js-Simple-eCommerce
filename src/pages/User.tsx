import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";

export const User = () => {
  const api = process.env.REACT_APP_API_URL;
  type user = {
    name: string;
    email: string;
  };
  const [data, setData] = useState<user>({
    name: "",
    email: "",
  });
  const auth = useAuth();

  useEffect(() => {
    console.log(auth.user);
    fetch(api + "/user-profile", {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res: any) => {
        return res.json();
      })
      .then((res) => {
        localStorage.getItem("token");
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [api]);

  return (
    <div>
      User... {data.email} {data.name}{" "}
    </div>
  );
};
