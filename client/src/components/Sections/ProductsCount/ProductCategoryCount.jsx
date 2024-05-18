import React from "react";
import Chart from "react-apexcharts";
const PropertySaleCount = ({
  saleCount,
  title,
  targetText = " ",
  percetage,
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
    <div className="col-sm-12 col-md-6">
      <div className="card property-card">
        <div className="card-body">
          <div className="media align-items-center">
            <div className="media-body me-3">
              <h2 className="fs-28 text-black font-w600">{saleCount}</h2>
              <p className="property-p mb-0 text-black font-w500">{title}</p>
              <span className="fs-13">{targetText}</span>
            </div>
            <div className="d-inline-block position-relative donut-chart-sale">
              <span className="donut1 ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySaleCount;
