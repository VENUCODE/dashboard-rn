import { Typography } from "@mui/material";
import { BarChart, LineChart } from "@mui/x-charts";
import { PieChart } from "@mui/x-charts/PieChart";
const Chart = () => {
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];

  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];

  const data = [
    { label: "Requested", value: 400 },
    { label: "Available", value: 300 },
  ];

  return (
    <>
      <div>
        <BarChart
          width={500}
          height={300}
          series={[
            { data: pData, label: "pv", id: "pvId" },
            { data: uData, label: "uv", id: "uvId" },
          ]}
          xAxis={[{ data: xLabels, scaleType: "band" }]}
        />
      </div>
      <div>
        <LineChart
          width={500}
          height={300}
          series={[
            { data: pData, label: "pv" },
            { data: uData, label: "uv" },
          ]}
          xAxis={[{ scaleType: "point", data: xLabels }]}
        />
      </div>
      <div>
        <PieChart
          series={[
            {
              startAngle: -90,
              endAngle: 90,
              paddingAngle: 1,
              innerRadius: 60,
              outerRadius: 80,
              data,
            },
          ]}
          margin={{ right: 2 }}
          width={200}
          height={200}
          slotProps={{
            legend: { hidden: true },
          }}
        >
          {" "}
          <Typography
            variant="h3"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            700
          </Typography>
        </PieChart>
      </div>
    </>
  );
};

export default Chart;
