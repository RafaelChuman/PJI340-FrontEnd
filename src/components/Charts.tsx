
import { theme } from "@/App.styled";
import { ApexOptions } from "apexcharts";

import Chart from "react-apexcharts";

export interface ChartsProps {
  labelOfChart: string;
  dataOfChart: dataOfChart;
}

export interface dataOfChart {
  categories: string[];
  series: number[];
}

export function Charts({ labelOfChart, dataOfChart }: ChartsProps) {
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[300],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: "category",
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: dataOfChart.categories,
    },
    fill: {
      opacity: 0.3,
      type: "gradient",
      gradient: {
        shade: "dark",
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  };

  const series = [
    {
      name: "Series1",
      data: dataOfChart.series
    },
  ];

  return (
    <>
      <label>{labelOfChart}</label>
        
      
      <Chart type="area" height={160} options={options} series={series} />
    </>
  );
}
