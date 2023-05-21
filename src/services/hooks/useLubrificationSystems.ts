import { useQuery } from "react-query";
import { api } from "@/services/api";
import { LubrificationSystems, Zones, getEntitie } from "../entities";
import { convertToDateBR } from "../utils";
import { dataOfChart } from "@/components/Charts";

export interface LubrificationSystemsGroupedByData {
  count: number;
  date: Date;
}

// export async function getLubrificationSystemsByMonth(date: Date): Promise<LubrificationSystemsGroupedByData[]> {
//   const { data } = await api.get("lubrificationSystems", {
//     params: { dateId: date },
//   });

//   const formatedData = data.map((lubrificationSystems: LubrificationSystemsGroupedByData) => {
//     return {
//       count: lubrificationSystems.count,
//       date: new Date(lubrificationSystems.date).toLocaleDateString("pt-BR", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "2-digit",
//       }),
//     };
//   });

//   return formatedData;
// }

// export async function getLubrificationSystemsAddByMonth(date: Date): Promise<LubrificationSystemsGroupedByData[]> {
//   const { data } = await api.get("lubrificationSystems", {
//     params: { dateAdd: date },
//   });

//   const formatedData = data.map((lubrificationSystems: LubrificationSystemsGroupedByData) => {
//     return {
//       count: lubrificationSystems.count,
//       date: new Date(lubrificationSystems.date).toLocaleDateString("pt-BR", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "2-digit",
//       }),
//     };
//   });

//   return formatedData;
// }

// export async function getLubrificationSystems(
//   id: string
// ): Promise<LubrificationSystems[]> {
//   const { data } = await api.get("lubrificationSystems", {
//     params: { id: id },
//   });

//   const formatedData = data.map((lubrificationSystem: LubrificationSystems) => {
//     return {
//       id: lubrificationSystem.id,
//       createdAt: new Date(lubrificationSystem.createdAt).toLocaleDateString(
//         "pt-BR",
//         {
//           day: "2-digit",
//           month: "long",
//           year: "numeric",
//         }
//       ),
//       add: lubrificationSystem.add.toString(),
//       obs: lubrificationSystem.obs,
//       activity: lubrificationSystem.activity,
//       collaborator: lubrificationSystem.collaborator,
//     };
//   });
//   return formatedData;
// }

export async function getLubrificationSystems(
  dateBegin: Date,
  dateEnd?: Date
): Promise<LubrificationSystems[]> {
  const data = await getEntitie<LubrificationSystems>({
    name: "lubrificationSystems",
    dateBegin,
    dateEnd,
  });

  const formatedData = data.map((lubrificationSystem: LubrificationSystems) => {
    return {
      id: lubrificationSystem.id,
      createdAt: lubrificationSystem.createdAt,
      add: lubrificationSystem.add,
      obs: lubrificationSystem.obs,
      activity: lubrificationSystem.activity,
      collaborator: lubrificationSystem.collaborator,
      er: lubrificationSystem.er,
    };
  });

  return formatedData;
}

export function useLubrificationSystems(dateBegin: Date, dateEnd?: Date) {
  return useQuery(
    "lubrificationSystems",
    () => getLubrificationSystems(dateBegin, dateEnd),
    {
      staleTime: 1000 * 300, //30 Seconds
    }
  );
}

// export function useLubrificationSystemsByMonth(date: Date) {
//   return useQuery("lubrificationSystemsByMonth", () => getLubrificationSystemsByMonth(date), {
//     staleTime: 1000 * 30, //30 Seconds
//   });
// }

// export function useLubrificationSystemsAddByMonth(date: Date) {
//   return useQuery("lubrificationSystemsAddByMonth", () => getLubrificationSystemsAddByMonth(date), {
//     staleTime: 1000 * 30, //30 Seconds
//   });
// }

export function FormatDataToCharts(
  lubSisSev: LubrificationSystems[],
  zonaFilter?: Zones[]
) {
  let data: dataOfChart = {
    categories: [],
    series: [],
  };

  let LubSisFiltered: LubrificationSystems[] = [];

  if (zonaFilter?.length && zonaFilter?.length > 0)
    lubSisSev.map((item) => {
      const itemFounded = zonaFilter.find(
        (filterItem) => filterItem.name == item.er.zone.name
      );
      if (itemFounded) LubSisFiltered.push(item);
    });

  const lubSisSevSorted = LubSisFiltered.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  let initialValue: LubrificationSystems = {
    activity: { id: "", name: "", createdAt: new Date() },
    add: 0,
    collaborator: {
      cellphone: "",
      cep: "",
      createdAt: new Date(),
      id: "",
      name: "",
      numberAddress: "",
      whatsApp: "",
    },
    createdAt: new Date(),
    er: {
      createdAt: new Date(),
      id: "",
      number: 0,
      zone: { createdAt: new Date(), id: "", name: "" },
    },
    id: "",
    obs: "",
  };

  lubSisSevSorted.reduce((previous, current) => {
    if (
      new Date(previous.createdAt).getDate() !=
      new Date(current.createdAt).getDate()
    ) {
      data.categories.push(current.createdAt.toString());
    }

    let serieIndex = data.series.findIndex(
      (item) => item.name == current.er.id
    );
    if (serieIndex == -1) {
      data.series.push({
        name: current.er.id,
        group: current.er.zone.name,
        data: [],
      });
      serieIndex = data.series.length - 1;
    }

    data.series[serieIndex].data.push({ x: current.createdAt, y: current.add });

    return current;
  }, initialValue);

  return data;
}
