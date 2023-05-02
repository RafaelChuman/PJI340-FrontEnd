import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";

export interface ChartsProps {
  labelOfChart: string;
  dataOfChart: dataOfChart;
  color: { [key: string]: string };
}

export interface dataOfChart {
  categories: string[];
  series: series[];
}

export interface series{
  name: string,
  data: number[]
  
}


const  Charts: React.FC<ChartsProps> =({ labelOfChart, dataOfChart, color }: ChartsProps) => {

  //dataOfChart.data.forEach( item => { series.push(item) })
  
  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: color[300],
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
        color: color[600],
      },
      axisTicks: {
        color: color[600],
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

  const LabelStyled = styled.label`
    color: ${color[600]};
  `;

  const series:series[] = dataOfChart.series

  return (
    <>
      <LabelStyled>{labelOfChart}</LabelStyled>

      <ReactApexChart
        type="area"
        height={160}
        options={options}
        series={series}
      />
    </>
  );
}

export default Charts;