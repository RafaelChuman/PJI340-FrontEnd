import { Charts, dataOfChart } from "@/components/Charts";
import { useLubrificationSystemsAddByMonth, useLubrificationSystemsByMonth } from "@/services/hooks/useLubrificationSystems";
import { FormatDataToCharts } from "@/services/utils";
import { Container } from "./dashboard.styled";

export default function Dashboard() {
  const today = new Date();

  const lubrificationSystemsData = useLubrificationSystemsByMonth(today);
  let lubrificationSystems: dataOfChart = { categories: [""], series: [0] };

  const lubrificationSystemsAddData = useLubrificationSystemsAddByMonth(today);
  let lubrificationSystemsAdd: dataOfChart = { categories: [""], series: [0] };

  if (lubrificationSystemsData.data) {
    lubrificationSystems = FormatDataToCharts(lubrificationSystemsData.data);
  }

  if (lubrificationSystemsAddData.data) {
    lubrificationSystemsAdd = FormatDataToCharts(lubrificationSystemsAddData.data);
  }

  return (
    <>
      <div>
        <h1>DashBoard</h1>
      </div>
      <Container>
            <div className="ChartDataContainer">
              {lubrificationSystems && (
                <Charts
                  dataOfChart={lubrificationSystems}
                  labelOfChart="Nº Manutenções Neste Mês"
                ></Charts>
              )}
            </div>

            <div className="ChartDataContainer">
              {lubrificationSystemsAdd && (
                <Charts
                  dataOfChart={lubrificationSystemsAdd}
                  labelOfChart="Qnt Litros Lubrificante Neste Mês"
                ></Charts>
              )}
            </div>
      </Container>
    </>
  );
}
