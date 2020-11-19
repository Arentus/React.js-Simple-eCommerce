import React from "react";
import { Button, Form } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import draw1 from "../assets/img/d4.svg";

export const SignUp = () => {
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
              <Form.Control type="name" placeholder="John Doe" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
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
        <div className="col-md-6 w-100 d-flex justify-content-center">
          <img src={draw1} className="img-fluid w-50" />
        </div>
      </div>
    </div>
  );
};
