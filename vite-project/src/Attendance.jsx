import React from "react";

import ReactApexChart from 'react-apexcharts';

const Attendance = () => {
      const [state, setState] = React.useState({
          
            series: [52,134,160,44],
            options: {
              chart: {
                width: 580,
                type: 'pie',
              },
              legend : {
                fontSize : "16px",
              },
              labels: ['90% - 100%','80% - 90%','70% - 60%','< 60%'],
              colors: ['rgba(192, 19, 226, 1)', '#00e326ff', '#008efbff' , '#FF0000'],
              dataLabels: {
                enabled: true, 
                style: {
                  fontSize: '18px', 
                  fontFamily: 'Helvetica, Arial, sans-serif', 
                  fontWeight: 'bold', 
                },
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
                 <div className="heading"><h1>Percentage of Attendance</h1></div>
                <ReactApexChart options={state.options} series={state.series} type="pie" width={500} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }


export default Attendance;