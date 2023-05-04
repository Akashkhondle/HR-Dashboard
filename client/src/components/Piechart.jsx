import React,{useState} from 'react';
import Chart from "react-apexcharts";

export const Piechart = () => {
    
    
  return (
    <div className="mix-chart">
        <Chart
        type='donut'
        width={450}
        height = {450}
        series = {[25,52]}
        options ={{
            labels : ['Female','Male'],
            tooltip: {
                y:{
                    formatter:(val)=>{
                        return `${val}`
                    }
                }
            },
            title:{
                text:'Sex Ratio'  
            },
            colors : ['#f58','#0000cc']
        }}
              
        />
    </div>
  )
}
