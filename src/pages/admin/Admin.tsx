import React from "react";
import { Link } from "react-router-dom";

export const Admin = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1>Admin Panel</h1>
          <hr />
          <Link to="admin/add/product">Agregar Producto</Link>
        </div>
      </div>
    </div>
  );
};
