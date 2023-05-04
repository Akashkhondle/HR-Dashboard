import React,{useState} from 'react';
import Chart from "react-apexcharts";

export const Barchart = ({series, options}) => {
    // console.log(salary);
    // console.log(dept);
    
    
  return (
    <div className="mix-chart">
        <Chart
              options={options}
              series={series}
              type="bar"
              width="450"
              height ="500"
            />
    </div>
  )
}
