import React from "react";

import ReactApexChart from "react-apexcharts";

const CGPA = () => {
        const [state, setState] = React.useState({
          
            series: [44, 55, 41, 17, 15],
            options: {
              chart: {
                width: 580,
                type: 'donut',
              },
              plotOptions: {
                pie: {
                  startAngle: -90,
                  endAngle: 270
                }
              },
              
              labels : ["9.0 - 10.0","8.0 - 9.0","7.0 - 8.0","6.0 - 7.0"," <6.0"],
              dataLabels: {
                enabled: true, 
                style: {
                  fontSize: '18px', 
                  fontFamily: 'Helvetica, Arial, sans-serif', 
                  fontWeight: 'bold', 
                },
              },
              fill: {
                type: 'gradient',
              },
              legend: {
                fontSize : "16px",
                formatter: function(val, opts) {
                  return val + " - " + opts.w.globals.series[opts.seriesIndex]
                }
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
            <div id="graph1">
                <div className="heading"><h1>CGPA across all semesters</h1></div>
                <ReactApexChart options={state.options} series={state.series} type="donut" width={500} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }
export default CGPA;