import React,{useState} from 'react';
import Chart from "react-apexcharts";

export const Linechart = (props) => {
    const  [state,setState] = useState({
        options: props.options,
        series: props.series
      });
  return (
    <div>
        <Chart
              options={state.options}
              series={state.series}
              type="line"
              width="550"
            />
    </div>
  )
}
