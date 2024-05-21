import { Card } from "antd";
import React from "react";
import Chart from "react-apexcharts";
const SupplierChart = () => {
  const optionsTimeline = {
    chart: {
      type: "bar",
      height: 200,
      stacked: true,
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: false,
      },
      offsetX: -10,
    },
    series: [
      {
        name: "Added ",
        data: [75, 150, 225],
      },
    ],

    plotOptions: {
      bar: {
        columnWidth: "25%",
        endingShape: "rounded",
        startingShape: "rounded",

        colors: {
          backgroundBarColors: ["#f0f0f0", "#f0f0f0", "#f0f0f0"],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
          distributed: true,
        },
      },
      distributed: true,
    },
    grid: {
      show: true,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
      colors: ["#309AD7", "#ffab2d", "#39d260"],
    },
    dataLabels: {
      enabled: false,
      colors: ["#000"],
      dropShadow: {
        enabled: true,
        top: 1,
        left: 1,
        blur: 1,
        opacity: 1,
      },
    },
    axisBorder: {
      show: true,
    },
    axisTicks: {
      show: true,
    },
    xaxis: {
      categories: ["Products", "Services", "Properties"],
      labels: {
        style: {
          colors: "#787878",
          fontSize: "13px",
          fontFamily: "poppins",
          fontWeight: 100,
          cssClass: "apexcharts-xaxis-label",
        },
      },
      crosshairs: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
    },

    yaxis: {
      show: true,
      labels: {
        style: {
          colors: "#787878",
          fontSize: "13px",
          fontFamily: "Poppins",
          fontWeight: 100,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },

    tooltip: {
      x: {
        show: true,
      },
    },
  };
  return (
    <div className="bg-white p-0 m-0">
      <Chart
        options={optionsTimeline}
        series={optionsTimeline.series}
        type="bar"
        height={190}
      />
    </div>
  );
};

export default SupplierChart;
