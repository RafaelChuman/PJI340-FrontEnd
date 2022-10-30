import { useQuery } from "react-query";
import { api } from "@/services/api";

export interface Activities {
  id: string;
  name: string;
  createdAt: string;
}

export async function getActivities(): Promise<Activities[]> {
  const { data } = await api.get("activities");

  const formatedData = data.map((zone: Activities) => {
    return {
      id: zone.id,
      name: zone.name,
      createdAt: new Date(zone.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return formatedData;
}

export function useActivities() {
  return useQuery("activities", getActivities, {
    staleTime: 1000 * 30, //30 Seconds
  });
}


