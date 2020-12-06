import React, { useState } from "react";
import { Button, Form, Image } from "react-bootstrap";

export const AddProduct = () => {
  const [values, setValues] = React.useState({
    name: "",
    description: "",
    image: "",
  });

  const [image, setImage] = useState<any>(null);

  // const handleChange = (prop) => (e) => {
  //   setValues({ ...values, [prop]: e.target.value });
  //   console.log(values.upload);
  // };

  const handleChangeImage = (props: any) => (e: any) => {
    setValues({
      ...values,
      [props]: { URL: e.target.value, file: e.target.files[0] },
    });

    var reader = new FileReader();

    reader.onload = (e) => {
      if (e.target?.result == null) {
        console.log("image is null");
        return;
      }

      setImage(e.target?.result);
    };

    reader.onerror = () => {
      console.log(reader.error);
    };

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const fileRef = React.createRef<HTMLInputElement>();

  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-md-6">
          <h1>Agregar Producto</h1>
          <hr />
          <Form>
            <Form.Group>
              <Form.Label>Imagen de Producto</Form.Label>
              <input
                type="file"
                accept="image/*"
                hidden
                ref={fileRef}
                onChange={handleChangeImage("image")}
              />
              <div className="centerFlex">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    fileRef.current?.click();
                  }}
                  className="uploadInput"
                >
                  Upload
                </button>
              </div>

              {image && (
                <div className="image__container">
                  <Image className="image__preview" src={image} />
                </div>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Titulo</Form.Label>
              <Form.Control type="text" placeholder="AMAzon basics" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" placeholder="9.99$" />
            </Form.Group>
            <Button variant="primary">Add</Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
