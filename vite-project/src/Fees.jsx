import React from "react";
import ReactApexChart from "react-apexcharts";

const Fees = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: "Fees Paid",
        type: "area",
        data: [1995, 2140, 2268, 2390, 2530, 2662, 2783, 2932, 3055, 3190],
      },
      {
        name: "Scholarship",
        type: "line",
        data: [180, 210, 240, 265, 290, 310, 335, 360, 385, 410],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
      },
      colors: [],
      stroke: {
        curve: "smooth",
        width: [3, 2],
      },
      fill: {
        opacity: [0, 1],
      },
      labels: [
        "2015",
        "2016",
        "2017",
        "2018",
        "2019",
        "2020",
        "2021",
        "2022",
        "2023",
        "2024",
      ],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "13px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: "bold",
        },
      },
      markers: {
        size: 0,
      },

      legend: {
                fontSize : "16px",
                
              },
      yaxis: [
        {
          title: {
          text: "Fees",
          offsetX: -8, // Adjust horizontal position
          offsetY: -15, // Adjust vertical position
          style: {
                fontSize: '16px', 
                fontWeight: 'bold', 
            },
        },
          labels: {
            style: {
              fontSize: "16px", // Change Y-axis label font size
              // You can also add other style properties here
            },
          },
        },
        {
          opposite: true,
           title: {
          text: "Scholarship",
          offsetX: 10, // Adjust horizontal position
          offsetY: -5, // Adjust vertical position
          style: {
                fontSize: '16px', 
                fontWeight: 'bold', 
            },
        },
          labels: {
            style: {
              fontSize: "16px", // Change Y-axis label font size
              // You can also add other style properties here
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart1">
        <div className="heading"><h2>Fees & Scholarship Report across all years</h2></div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="line"
          height={480}
          width={1700}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Fees;
