import Charts, { dataOfChart } from "@/components/Charts";
import { Container } from "./dashboard.styled";
import { theme } from "@/App.styled";
import { useState } from "react";
import React from "react";
import useModal from "@/services/hooks/useModal";
import Modal from "@/components/Modal";
import { RiFilter2Fill } from "react-icons/ri";
import {
  FormatDataToCharts,
  useLubrificationSystems,
} from "@/services/hooks/useLubrificationSystems";
import { Zones } from "@/services/entities";
import {
  DashboardModalOilUsed,
  GraphiclOilUsed,
} from "./dashboardModalOilUsed";

export default function Dashboard() {
  const dateBegin = new Date();
  const dateEnd = new Date();

  dateBegin.setDate(1);

  const { isOpen, toggle } = useModal();

  const [color, useColor] = useState(theme.colors.purple);

  const [graphiclOilUsed, setGraphicOilUsed] = useState<GraphiclOilUsed >({
    dateBegin: dateBegin,
    dateEnd: dateEnd,
    zones: [],
  });

  const lsData = useLubrificationSystems(graphiclOilUsed.dateBegin, graphiclOilUsed.dateEnd);

  let lsDataToChart: dataOfChart = {
    categories: [],
    series: [],
  };

  if (lsData.data) {
    lsDataToChart = FormatDataToCharts(lsData.data, graphiclOilUsed.zones);
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

      <Modal isOpen={isOpen} toggle={toggle}>
        <DashboardModalOilUsed
          graphiclOilUsed={graphiclOilUsed}
          setGraphicOilUsed={setGraphicOilUsed}
          toggle={toggle}
        ></DashboardModalOilUsed>
      </Modal>

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
