import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Charts, dataOfChart } from "@/components/Charts";
import { useUsersByMonth } from "@/services/hooks/useUsers";
import { FormatDataToCharts, returnPaginatedData } from "@/services/utils";
import { useState } from "react";
import { Container } from "@/components/Header/Header.styled";

export default function Dashboard() {
  const today = new Date();
  const numberOfItensPerPage = 10;


    const usersData = useUsersByMonth();
  let usersChartData: dataOfChart = { categories: [""], series: [0] };






  if (usersData.data) {
    usersChartData = FormatDataToCharts(usersData.data);
  }


  return (
    <div>
      
      <Container>
       
          <div className="GridContainer"  >
            <div className="GridContent"        >

              <div className="ChartDataContainer">
                {usersChartData && (
                  <Charts
                    dataOfChart={usersChartData}
                    labelOfChart="Novos Clientes Neste Mês"
                  ></Charts>
                )}
              </div>
            </div>

          </div>
      </Container>
    </div>
  );
}
