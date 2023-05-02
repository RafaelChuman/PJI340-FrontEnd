import { useQuery } from "react-query";
import { api } from "@/services/api";
import { ERs } from "./useERs";
import { dataOfChart } from "@/components/Charts";

export interface OilMonitor {
  id: string;
  oilLevel: number;
  createdAt: Date;
  er: ERs;
}

export interface OilMonitorGroupedByER {
  erId: string;
  oilMonitors: OilMonitor[];
}

// interface dataToChart{
//   count: number;
//   date: Date;
// }

export function groupByER(oilMonitor: OilMonitor[]): OilMonitorGroupedByER[] {
  const sortedData = oilMonitor.sort((first, second) =>
    first.createdAt > second.createdAt ? 1 : -1
  );

  let groupedData: OilMonitorGroupedByER[] = [];

  sortedData.forEach((current) => {
    const index = groupedData.findIndex((item) => item.erId == current.er.id);

    if (index === -1) {
      groupedData.push({ erId: current.er.id, oilMonitors: [current] });
    } else {
      groupedData[index].oilMonitors.push(current);
    }
  });

  return groupedData;
}

export async function getOilMonitor(date: Date): Promise<OilMonitor[]> {
  const { data } = await api.get("oilMonitor", {
    params: {
      ERId: ["1", "2"],
      dateBegin: "2023-06-02T10:25:39.828Z",
      dateEnd: "2023-06-02T11:25:39.828Z",
    },
  });

  const formatedData = data.map((oilMonitor: OilMonitor) => {
    return {
      id: oilMonitor.id,
      createdAt: new Date(oilMonitor.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      oilLevel: oilMonitor.oilLevel,
      er: oilMonitor.er,
    };
  });

  return formatedData;
}

export function useOilMonitor(date: Date) {
  return useQuery("oilMonitor", () => getOilMonitor(date), {
    staleTime: 1000 * 600, //30 Seconds
  });
}

export function FormatDataToCharts(oilmonitor: OilMonitorGroupedByER[]) {
  let data: dataOfChart = {
    categories: [],
    series: [],
  };

  oilmonitor.forEach((erItem) => {
    let dataItem: number[] = [];

    erItem.oilMonitors.forEach((oilItem) => {
      dataItem.push(oilItem.oilLevel);

      data.categories.push(
        new Date(oilItem.createdAt).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      );
    });

    data.series.push({
      name: erItem.erId,
      data: dataItem,
    });
  });

  return data;
}
