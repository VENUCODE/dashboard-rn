import React, { useEffect, useState } from "react";
import SupplierList from "./SupplierList";
import { useSuppliers } from "../../context/useSupplier";
import SupplierFilter from "./SupplierFilter";
import AddSupplier from "./AddSupplier";
import { Button } from "@mui/material";
const SupplierPage = () => {
  const { suppliers = [] } = useSuppliers();
  const [current, setCurrent] = useState(suppliers);
  const [add, setAdd] = useState(false);
  useEffect(() => {
    setCurrent(suppliers);
  }, [suppliers]);
  return (
    <div className="content-body">
      <div className="container-fluid">
        <div className="p-0 my-1">
          <div className="w-100 d-flex flex-row p-2 justify-content-between card">
            <h3 className="poppins-bold text-capitalize">Supplier page</h3>
            <Button
              variant="contained"
              size="small"
              className="btn btn-primary light"
              onClick={() => {
                setAdd((p) => !p);
              }}
            >
              {add ? "Close Form" : "Add Supplier"}
            </Button>
          </div>
          {add && <AddSupplier />}
        </div>
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
