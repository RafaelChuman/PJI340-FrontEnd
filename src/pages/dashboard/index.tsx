import { ContainerStyled } from "./dashboard.styled";
import { theme } from "@/App.styled";
import { useEffect, useState } from "react";
import React from "react";
import useModal from "@/services/hooks/useModal";
import Modal from "@/components/Modal";
import { RiFilter2Fill } from "react-icons/ri";
import {
  FormatLubrificationSystemsToChartLine,
  FormatLubrificationSystemsToChartPie,
  useLubrificationSystems,
} from "@/services/hooks/useLubrificationSystems";
import {
  ChartLineFilterModal,
  GraphiclOilUsed,
} from "./chartLineFilterModal";
import {
  FormatDataToCharts as FormatDataToChartsOilmonitor,
  useOilMonitor,
} from "@/services/hooks/useOilMonitor";
import ChartBar, { dataOfChartBar } from "@/components/ChartBar";
import ChartLined, { dataOfChartLined } from "@/components/ChartLined";
import ChartPie from "@/components/ChartPie";

const gofInitialValue = {
  dateBegin: new Date(),
  dateEnd: new Date(),
  zones: [],
};

let chartLineData: dataOfChartLined = {
  categories: [[]],
  series: [],
};

let chartBarData: dataOfChartBar = {
  categories: [[]],
  series: [],
};

let chartPieData: dataOfChartBar = {
  categories: [[]],
  series: [],
};

export default function Dashboard() {
  const [color, useColor] = useState(theme.colors.purple);

  gofInitialValue["dateBegin"].setDate(1);

  const chartLineFilterModal = useModal();
  const chartBarFilterModal = useModal();
  const chartPieFilterModal = useModal();

  const [chartLineFilter, setChartLineFilter] =
    useState<GraphiclOilUsed>(gofInitialValue);
  const [chartBarFilter, setChartBarFilter] =
    useState<GraphiclOilUsed>(gofInitialValue);
  const [chartPieFilter, setChartPieFilter] =
    useState<GraphiclOilUsed>(gofInitialValue);

  const chartLineDataNotFormated = useLubrificationSystems(
    chartLineFilter.dateBegin,
    chartLineFilter.dateEnd,
    "chartLineDataNotFormated"
  );

  const chartBarDataNotFormated  = useOilMonitor(
    chartBarFilter.dateBegin,
    chartBarFilter.dateEnd
  );

  const chartPieDataNotFormated  = useLubrificationSystems(
    chartBarFilter.dateBegin,
    chartBarFilter.dateEnd,
    "chartPieDataNotFormated"
  );

  if (chartLineDataNotFormated .data) {
    chartLineData = FormatLubrificationSystemsToChartLine(
      chartLineDataNotFormated.data,
      chartLineFilter.zones
    );
  }

  if (chartBarDataNotFormated .data) {
    chartBarData = FormatDataToChartsOilmonitor(
      chartBarDataNotFormated.data,
      chartBarFilter.zones,
      32
    );
  }

  if (chartPieDataNotFormated .data) {
    chartPieData = FormatLubrificationSystemsToChartPie(
      chartPieDataNotFormated.data,
      chartPieFilter.zones
    );
  }

  //const color = theme.colors.yellow;
  // const ContainerStyled = Container({ color });

  return (
    <>

      <Modal
        isOpen={chartLineFilterModal.isOpen}
        toggle={chartLineFilterModal.toggle}
      >
        <ChartLineFilterModal
          graphiclOilUsed={chartLineFilter}
          setGraphicOilUsed={setChartLineFilter}
          toggle={chartLineFilterModal.toggle}
        ></ChartLineFilterModal>
      </Modal>

      <Modal
        isOpen={chartBarFilterModal.isOpen}
        toggle={chartBarFilterModal.toggle}
      >
        <ChartLineFilterModal
          graphiclOilUsed={chartBarFilter}
          setGraphicOilUsed={setChartBarFilter}
          toggle={chartBarFilterModal.toggle}
        ></ChartLineFilterModal>
      </Modal>

      <Modal
        isOpen={chartPieFilterModal.isOpen}
        toggle={chartPieFilterModal.toggle}
      >
        <ChartLineFilterModal
          graphiclOilUsed={chartPieFilter}
          setGraphicOilUsed={setChartPieFilter}
          toggle={chartPieFilterModal.toggle}
        ></ChartLineFilterModal>
      </Modal>

      <ContainerStyled colorStyled={color}>
        <div className="ChartDataContainer">
          <div className="filterButton">
            <button onClick={chartLineFilterModal.toggle}>
              {React.createElement(RiFilter2Fill)}{" "}
            </button>
          </div>
          <div className="contentChart">
            {chartLineData && (
              <ChartLined
                dataOfChart={chartLineData}
                labelOfChart="Litros Adicionados na Manutenção"
                dataType="datetime"
                color={color}
              ></ChartLined>
            )}
          </div>
        </div>

        <div className="ChartDataContainer">
          <div className="filterButton">
            <button onClick={chartBarFilterModal.toggle}>
              {React.createElement(RiFilter2Fill)}{" "}
            </button>
          </div>
          <div className="contentChart">
            {chartBarData && (
              <ChartBar
                dataOfChart={chartBarData}
                labelOfChart="Nível Crítico de Óleo"
                dataType={undefined}
                color={color}
              ></ChartBar>
            )}
          </div>
        </div>
      </ContainerStyled>

      <ContainerStyled colorStyled={color}>
        <div className="ChartDataContainer">
          <div className="filterButton">
            <button onClick={chartPieFilterModal.toggle}>
              {React.createElement(RiFilter2Fill)}{" "}
            </button>
          </div>
          <div className="contentChart">
            {chartPieData && (
              <ChartPie
                dataOfChart={chartPieData}
                labelOfChart="Nº Manutenções por Colaborador"
                color={color}
              ></ChartPie>
            )}
          </div>
        </div>
      </ContainerStyled>
    </>
  );
}
