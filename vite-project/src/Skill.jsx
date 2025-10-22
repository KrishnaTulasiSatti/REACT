import React from "react";
import ReactApexChart from "react-apexcharts";

const Skill = () => {
  const [state, setState] = React.useState({
    series: [
      {
        data: [400, 430, 448, 470, 540],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      
      plotOptions: {
        bar: {
          borderRadius: 6,
          borderRadiusApplication: "end",
          borderRadiusWhenStacked: 'last',
          horizontal: true,
          barHeight: 12,
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: [ "ML", "Flutter", "Cloud", "React", "DSA"],
        labels: {
            style: {
                fontSize: '16px', // Change Y-axis label font size
                // You can also add other style properties here
            },
        },
      },

      yaxis : {
        labels: {
            style: {
                fontSize: '16px', // Change Y-axis label font size
                // You can also add other style properties here
            },
        },
      }
    },
  });

  return (
    <div>
      <div id="chart">
        <div className="heading"><h1>Skills Overview</h1></div>
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={330}
          width={500}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Skill;