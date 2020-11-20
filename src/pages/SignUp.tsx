import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import draw1 from "../assets/img/d4.svg";

export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const api = process.env.REACT_APP_API_URL;

  const handleChange = (prop: any) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const tryRegister = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    fetch(api + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(values),
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const { t } = useTranslation();

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1>{t("Sign Up")}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={values.name}
                onChange={handleChange("name")}
                placeholder="John Doe"
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={values.password}
                onChange={handleChange("password")}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                value={values.password_confirmation}
                onChange={handleChange("password_confirmation")}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={tryRegister} type="submit">
              Sign Up
            </Button>
          </Form>
        </div>
        <div className="col-md-6 w-100 d-flex justify-content-center">
          <img src={draw1} alt="123" className="img-fluid w-50" />
        </div>
      </div>
    </div>
  );
};
