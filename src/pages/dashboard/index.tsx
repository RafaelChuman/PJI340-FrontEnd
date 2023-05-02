import Charts, { dataOfChart } from "@/components/Charts";
import { Container } from "./dashboard.styled";
import { theme } from "@/App.styled";
import { useEffect, useState } from "react";
import {
  FormatDataToCharts,
  groupByER,
  useOilMonitor,
} from "@/services/hooks/useOilMonitor";
import React from "react";

export default function Dashboard() {
  const today = new Date();

  const [color, useColor] = useState(theme.colors.purple);

  const oilMonitorData = useOilMonitor(today);

  let oilMonitor: dataOfChart={
    categories: [],
    series: []
  };;

  // const lubrificationSystemsAddData = useLubrificationSystemsAddByMonth(today);
  // let lubrificationSystemsAdd: dataOfChart = { categories: [""], series: [0] };

  if (oilMonitorData.data) {
    let oilMonitorDataGroupedByER = groupByER(oilMonitorData.data);


    oilMonitor = FormatDataToCharts(oilMonitorDataGroupedByER);
  }

  // if (lubrificationSystemsAddData.data) {
  //   lubrificationSystemsAdd = FormatDataToCharts(lubrificationSystemsAddData.data);
  // }

  const ContainerStyled = Container({ color });

  return (
    <>
      <div>
        <h1>DashBoard</h1>
      </div>


        <ContainerStyled>
         <div className="ChartDataContainer">
           {oilMonitor && (
             <Charts
               dataOfChart={oilMonitor}
               labelOfChart="Nº Manutenções Neste Mês"
               color={color}
             ></Charts>
           )}
         </div>
          
         </ContainerStyled> 
    </>
  );
}

