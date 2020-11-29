import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useAuth } from "../context/useAuth";

export const SignIn = (props: any) => {
  const { t } = useTranslation();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleChange = (prop: any) => (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const tryLogin = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    auth.login(values).then((res: any) => {
      console.log(res);
      props.history.push("/user");
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 offset-md-3">
          <h1>{t("Sign In")}</h1>
        </div>
      </div>
      <div className="row m-auto">
        <div className="col-md-6 offset-md-3">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
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
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" onClick={tryLogin} type="submit">
              Sign In
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
