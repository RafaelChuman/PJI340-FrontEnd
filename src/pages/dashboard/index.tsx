import Charts, { dataOfChart } from "@/components/Charts";
import { Container } from "./dashboard.styled";
import { theme } from "@/App.styled";
import { useState } from "react";
import React from "react";
import useModal from "@/services/hooks/useModal";
import Modal from "@/components/Modal";
import { RiFilter2Fill } from "react-icons/ri";
import { FormatDataToCharts, useLubrificationSystems } from "@/services/hooks/useLubrificationSystems";

export default function Dashboard() {
  const today = new Date();

  today.setDate(1);

  const { isOpen, toggle } = useModal();

  const [color, useColor] = useState(theme.colors.purple);

  const lsData = useLubrificationSystems(today);

  let lsDataToChart: dataOfChart = {
    categories: [],
    series: [],
  };

  if (lsData.data) {
    lsDataToChart = FormatDataToCharts(lsData.data, "ART");
  }

  // const oilMonitorData = useOilMonitor(today);

  // if (oilMonitorData.data) {
  //   let oilMonitorDataGroupedByER = groupByER(oilMonitorData.data);

  //   oilMonitor = FormatDataToCharts(oilMonitorDataGroupedByER);
  // }

  const ContainerStyled = Container({ color });

  return (
    <>
      <div>
        <h1>DashBoard</h1>
      </div>

      <Modal isOpen={isOpen} toggle={toggle}></Modal>

      <ContainerStyled>
        <div className="ChartDataContainer">
          <div className="filterButton">
            <button onClick={toggle}>
              {React.createElement(RiFilter2Fill)}{" "}
            </button>
          </div>
          {lsDataToChart && (
            <Charts
              dataOfChart={lsDataToChart}
              labelOfChart="Nº Manutenções Neste Mês"
              color={color}
            ></Charts>
          )}
        </div>
      </ContainerStyled>
    </>
  );
}
