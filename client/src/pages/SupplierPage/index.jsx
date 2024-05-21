import React, { useEffect, useState } from "react";
import SupplierList from "./SupplierList";
import { useSuppliers } from "../../context/useSupplier";
import SupplierFilter from "./SupplierFilter";
const SupplierPage = () => {
  const { suppliers } = useSuppliers();
  const [current, setCurrent] = useState(suppliers);
  useEffect(() => {
    setCurrent(suppliers);
  }, [suppliers]);
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div>
          <SupplierFilter setCurrent={setCurrent} />
        </div>
        <div>
          <SupplierList current={current} />
        </div>
      </div>
    </div>
  );
};

export default SupplierPage;
