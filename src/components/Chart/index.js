import React from "react";
import { moegas, exemplo } from "./data";
import { Line } from "react-chartjs-2";
import { red } from "@mui/material/colors";
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () =>  {
  // "https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"
    return  (
      <div>
        <Line   datasetIdKey='id'
                data={{
                  labels: ['30\'', '31\'', '32\'', '33\'', '34\''],
                  datasets: moegas,
                }}
                />    
      </div>
    )
    }

export default Chart;
