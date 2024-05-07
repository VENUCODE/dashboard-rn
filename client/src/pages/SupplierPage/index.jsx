import React from "react";
import { useParams } from "react-router-dom";

const SupplierPage = () => {
  const { sid } = useParams();
  return (
    <div className="content-body">
      <div className="container-fluid">
        <h1>
          Suppliers page
          {sid}
        </h1>
      </div>
    </div>
  );
};

export default SupplierPage;
