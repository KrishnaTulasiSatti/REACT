import React from "react";
import ReactApexChart from "react-apexcharts";
import Student from './assets/students.png';
import './Reports.css';
import Trophie from './assets/trophie.png';

import Performance from './assets/performance.png'
const Reports = () => {
  return (
    <>
    <div className="report_">
    <div><p>Overall Statistics of Students</p></div>
    <div className="reports">
      <div className="students">
        <div>
            <img src={Student} alt="Image cracked" />
        </div>
        <div className="sub_heading">
            Total Students
        </div>
        <div className="count">4,523</div>
      </div>

      <div className="students">
        <div>
            <img src={Trophie} alt="Image cracked" />
        </div>
        <div className="sub_heading">
            Total Placements
        </div>
        <div className="count">3,100+</div>
      </div>

      <div className="students">
        <div>
          <img src={Performance} alt="Performance icon" />
        </div>
        <div className="sub_heading">Overall Performance</div>
        <div className="count">92%</div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Reports;