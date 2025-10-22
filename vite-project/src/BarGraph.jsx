import React from "react";
import ReactApexChart from "react-apexcharts";

const BarGraph = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "MCQs",
        data: [270, 207, 220, 280, 170],
      },
      {
        name: "Coding",
        data: [203, 127, 112, 207, 97],
      },
      {
        name: "HR",
        data: [120, 62, 54, 103, 48],
      },
      {
        name: "Selected",
        data: [63, 31, 20, 33, 23],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
          borderRadiusApplication: "end",
        },
      },
      colors: [],
      legend: {
        fontSize: "16px",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Infosys", "Vipro", "TCS", "Accenture", "Darwin Box"],
        labels: {
            style: {
                fontSize: '16px', // Change Y-axis label font size
                // You can also add other style properties here
            },
        },
      },
      yaxis: {
        title: {
          text: "Students count",
          offsetX: -8, // Adjust horizontal position
          offsetY: -15, // Adjust vertical position
          style: {
                fontSize: '16px', 
                fontWeight: 'bold', 
            },
        },
        labels: {
            style: {
                fontSize: '16px', // Change Y-axis label font size
                // You can also add other style properties here
            },
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " students";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="graph">
        <div className="heading">
          <h1>Placement Statistics</h1>
        </div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={400}
          width={650}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarGraph;
