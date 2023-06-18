import React from "react";
import { userData } from "./data";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () =>  {
  const src="https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"
    return  (
      <div>
        <Line   datasetIdKey='id'
  data={{
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 1,
        label: '',
        data: [5, 6, 7],
      },
      {
        id: 2,
        label: '',
        data: [3, 2, 1],
      },
    ],
  }} />
      </div>
    )
    }

export default Chart;
