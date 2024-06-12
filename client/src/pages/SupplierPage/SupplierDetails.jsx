import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileCard from "./ProfileCard";
import SupplierChart from "./SupplierChart";
import { FloatButton, message } from "antd";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { endpoints, hostUri } from "../../fetch";
import { Grid } from "@mui/material";
import SuppliesCard from "./SuppliesCard";
import SuppliesFilter from "./SuppliesFilter";
import { useSuppliers } from "../../context/useSupplier";
const SupplierDetails = () => {
  const navigate = useNavigate();
  const { sid } = useParams();
  const { suppliers } = useSuppliers();
  const [products, setProducts] = useState([]);
  const [current, setCurrent] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [supplier, setSupplier] = useState();
  useEffect(() => {
    setCurrent(products);
    const categorySum = {};
    products.forEach((item) => {
      const { categoryName, requestCount } = item;
      if (!categorySum[categoryName]) {
        categorySum[categoryName] = 0;
      }
      categorySum[categoryName] += requestCount;
    });
    setGraphData(categorySum);
  }, [products]);
  useEffect(() => {
    const getSupplierProducts = async (sid) => {
      try {
        const response = await fetch(
          `${hostUri}${endpoints.getSupplierAddons}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: sid }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data.data);
      } catch (error) {
        message.error(error.message, 1);
      }
    };

    if (sid) {
      getSupplierProducts(sid);
    }
    const filteredSupplier = suppliers.filter((sup) => sup._id === sid);
    setSupplier(
      filteredSupplier[0]
        ? { ...filteredSupplier[0], status: true }
        : { status: false }
    );
  }, [sid]);

  return (
    <div className="content-body">
      <div className="container-fluid position-relative">
        <Grid container spacing={4}>
          <Grid item xs={12} className="">
            <FloatButton
              type="primary"
              tooltip={<div>Go back</div>}
              onClick={() => {
                navigate("/suppliers");
              }}
              icon={<FaArrowLeft />}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <ProfileCard
              supplier={supplier}
              count={products.length}
              reqCount={Object.values(graphData).reduce(
                (acc, curr) => acc + curr,
                0
              )}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <SupplierChart graphData={graphData} />
          </Grid>
          <Grid item xs={12}>
            <SuppliesFilter setCurrent={setCurrent} products={products} />
          </Grid>
          <Grid item xs={12}>
            <SuppliesCard products={current} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SupplierDetails;
