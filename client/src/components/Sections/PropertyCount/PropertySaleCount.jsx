import React from "react";
import Chart from "react-apexcharts";
import { Card } from "@mui/material";
const PropertySaleCount = ({
  saleCount = "2,356",
  title = "Properties for Sale",
  targetText = "Target 3k/month",
  percetage = "71%",
  styleClass,
}) => {
  const donutData = {
    series: [7, 2], // Series data representing 7 filled sections and 1 empty section
    options: {
      chart: {
        type: "donut",
      },
      dataLabels: {
        enabled: false, // Disable data labels (percentage text)
      },
      plotOptions: {
        pie: {
          donut: {
            size: "80%", // Adjust the size of the donut hole
            labels: {
              show: false, // Hide labels inside the donut
            },
          },
        },
      },
      labels: ["Filled", "Empty"], // Labels for the sections
      colors: [
        styleClass === "success" ? "rgb(55, 209, 90)" : "rgb(60, 76, 184)",
        "rgba(236, 236, 236, 1)",
      ], // Filled section color and empty section color
      legend: {
        show: false,
      },
    },
  };
  return (
    <Card>
      <div className="d-flex w-100  justify-content-center">
        <h2 className="fs-28 text-black font-w600 text-center">{saleCount}</h2>
      </div>
      <div className="w-100 d-inline-block justify-content-center position-relative donut-chart-sale ">
        <span className="d-flex justify-content-center">
          <Chart
            options={donutData.options}
            series={donutData.series}
            type="donut"
            width="150"
          />
        </span>
        <small className={`text-${styleClass}`}>{percetage}</small>
        <span className={`circle bgl-${styleClass}`}></span>
      </div>
      <p className="text-center mb-0 text-black font-w500">{title}</p>
    </Card>
  );
};

export default PropertySaleCount;
