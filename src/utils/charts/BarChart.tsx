
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

interface BarChartProps {
  horizontal?:boolean,
  data_1:number[];
  data_2:number[];
  title_1:string;
  title_2:string;
  bgColor_1:string;
  bgColor_2:string;
  labels?:string[]
}

export const BarChart = ({
  data_1,
  data_2,
  title_1,
  title_2,
  bgColor_1,
  bgColor_2,
  labels = months,
}  : BarChartProps) => {

  const options:ChartOptions<"bar"> = {
    responsive: true,
    indexAxis:"x",
    plugins: {
      legend: {
      display:false,
      },
      title: {
      display: false,
      },
    },
  };
  const data:ChartData<"bar" , number[] , string> = {
  labels,
  datasets: [
    {
    label: title_1,
    data: data_1,
    backgroundColor:bgColor_1,
    },
    {
    label: title_2,
    data: data_2,
    backgroundColor: bgColor_2,
    },
  ],
  };

  return <Bar options={options} data={data} />;
}