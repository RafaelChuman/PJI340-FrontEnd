import { useQuery } from "react-query";
import { api } from "@/services/api";
import { Zones } from "../entities";


export async function getZones(): Promise<Zones[]> {
  const { data } = await api.get("zones");

  const formatedData = data.map((zone: Zones) => {
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

export function useZones() {
  return useQuery("zones", getZones, {
    staleTime: 1000 * 30, //30 Seconds
  });
}


