import React from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";

export const SignIn = () => {
  const { t } = useTranslation();

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
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
