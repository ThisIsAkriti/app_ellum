import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title,
    Legend,
    ChartData,
    ChartOptions,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  const months = [
    "2018",
    "2019",
    "2020",
    "2020",
    "2022",
    "2023",
    "2024"
  ]
  
  interface LineChartProps {
    horizontal?:boolean,
    label:string;
    data1:number[];
    data2:number[];
    title1:string;
    title2:string;
    backgroundColor1:string;
    backgroundColor2:string;
    borderColor1 : string;
    borderColor2 : string;
    labels?:string[]
  }
  
  export const LineChart = ({
    data1,
    data2,
    title1,
    title2,
    label,
    backgroundColor1,
    backgroundColor2,
    borderColor1,
    borderColor2,
    labels = months,
  }  : LineChartProps) => {
  
    const options:ChartOptions<"line"> = {
      responsive: true,
      plugins: {
        legend: {
        display:false,
        },
        title: {
        display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            display: false,
          },
        },
        x: {
          grid: {
            display: false,
          },
        },
      },
    };
    const lineChartdata:ChartData<"line" , number[] , string> = {
    labels,
    datasets: [
      {
      label : title1,
      data : data1,
      backgroundColor : backgroundColor1,
      borderColor : borderColor1,
      },
      {
        label : title2,
        data : data2,
        backgroundColor : backgroundColor2,
        borderColor : borderColor2,
        },
    ],
    };
  
    return <Line options={options} data={lineChartdata} />;
  }