import React from "react";

import ReactApexChart from 'react-apexcharts';

const Attendance = () => {
      const [state, setState] = React.useState({
          
            series: [52,134,160,44],
            options: {
              chart: {
                width: 380,
                type: 'pie',
              },
              labels: ['90% - 100%','80% - 90%','70% - 60%','< 60%'],
              colors: ['#008FFB', '#00E396', '#FEB019', '#FF0000'],
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
                <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
              </div>
            <div id="html-dist"></div>
          </div>
        );
      }


export default Attendance;