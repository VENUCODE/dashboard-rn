import React from "react";
import Chart from "react-apexcharts";
const TimelineChart = ({ color }) => {
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
        name: "Active ",
        data: [75, 150, 225, 200, 35, 50, 150, 89, 50, 78, 50, 60],
      },
    ],

    plotOptions: {
      bar: {
        columnWidth: "25%",
        endingShape: "rounded",
        startingShape: "rounded",

        colors: {
          backgroundBarColors: [
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
            "#f0f0f0",
          ],
          backgroundBarOpacity: 1,
          backgroundBarRadius: 5,
        },
      },
      distributed: true,
    },
    colors: [color],
    grid: {
      show: false,
    },
    legend: {
      show: false,
    },
    fill: {
      opacity: 1,
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
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },

    yaxis: {
      show: false,
    },

    tooltip: {
      x: {
        show: true,
      },
    },
  };
  return (
    <Chart
      options={optionsTimeline}
      series={optionsTimeline.series}
      type="bar"
      height={200}
    />
  );
};

export default TimelineChart;
