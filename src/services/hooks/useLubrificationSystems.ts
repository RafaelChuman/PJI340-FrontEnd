import { useQuery } from "react-query";
import { api } from "@/services/api";
import { Activities } from "./useActivity";
import { Collaborators } from "./useCollaborators";
import { ERs } from "./useERs";

export interface LubrificationSystems {
  id: string;
  createdAt: string;
  add: number;
  obs?: string;
  activity: Activities;
  collaborator: Collaborators;
  er: ERs;
}

export interface LubrificationSystemsGroupedByData {
  count: number;
  date: Date;
}

export async function getLubrificationSystemsByMonth(date: Date): Promise<LubrificationSystemsGroupedByData[]> {
  const { data } = await api.get("lubrificationSystems", {
    params: { dateId: date },
  });

  const formatedData = data.map((lubrificationSystems: LubrificationSystemsGroupedByData) => {
    return {
      count: lubrificationSystems.count,
      date: new Date(lubrificationSystems.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    };
  });

  return formatedData;
}

export async function getLubrificationSystemsAddByMonth(date: Date): Promise<LubrificationSystemsGroupedByData[]> {
  const { data } = await api.get("lubrificationSystems", {
    params: { dateAdd: date },
  });

  const formatedData = data.map((lubrificationSystems: LubrificationSystemsGroupedByData) => {
    return {
      count: lubrificationSystems.count,
      date: new Date(lubrificationSystems.date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
    };
  });

  return formatedData;
}


export async function getLubrificationSystems(
  id: string
): Promise<LubrificationSystems[]> {
  const { data } = await api.get("lubrificationSystems", {
    params: { id: id },
  });

  const formatedData = data.map((lubrificationSystem: LubrificationSystems) => {
    return {
      id: lubrificationSystem.id,
      createdAt: new Date(lubrificationSystem.createdAt).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
      add: lubrificationSystem.add.toString(),
      obs: lubrificationSystem.obs,
      activity: lubrificationSystem.activity,
      collaborator: lubrificationSystem.collaborator,
    };
  });
  return formatedData;
}

export function useLubrificationSystems(id: string) {
  return useQuery("lubrificationSystems", () => getLubrificationSystems(id), {
    staleTime: 1000 * 30, //30 Seconds
  });
}


export function useLubrificationSystemsByMonth(date: Date) {
  return useQuery("lubrificationSystemsByMonth", () => getLubrificationSystemsByMonth(date), {
    staleTime: 1000 * 30, //30 Seconds
  });
}

export function useLubrificationSystemsAddByMonth(date: Date) {
  return useQuery("lubrificationSystemsAddByMonth", () => getLubrificationSystemsAddByMonth(date), {
    staleTime: 1000 * 30, //30 Seconds
  });
}
