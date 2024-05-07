import React from "react";
import Chart from "react-apexcharts";
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
    <div class="col-sm-12 col-md-6">
      <div class="card property-card">
        <div class="card-body">
          <div class="media align-items-center">
            <div class="media-body me-3">
              <h2 class="fs-28 text-black font-w600">{saleCount}</h2>
              <p class="property-p mb-0 text-black font-w500">{title}</p>
              <span class="fs-13">{targetText}</span>
            </div>
            <div class="d-inline-block position-relative donut-chart-sale">
              <span class="donut1 ">
                <Chart
                  options={donutData.options}
                  series={donutData.series}
                  type="donut"
                  width="150"
                />
              </span>
              <small class={`text-${styleClass}`}>{percetage}</small>
              <span class={`circle bgl-${styleClass}`}></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySaleCount;
