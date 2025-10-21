import React from "react";

import ReactApexChart from "react-apexcharts";

const CGPA = () => {
        const [state, setState] = React.useState({
          
            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                width: 380,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              labels : ["1","2","3","4","5"],
              dataLabels: {
                enabled: false
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
              },
              title: {
                text: 'CGPA across all the semesters'
              },
              responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 200
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
            },
          
          
        });

    
        return (
          <div>
            <div id="chart">
                <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }
export default CGPA;