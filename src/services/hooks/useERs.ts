import { useQuery } from "react-query";
import { api } from "@/services/api";
import { ERs } from "../entities";



export async function getERs(): Promise<ERs[]> {
  const { data } = await api.get("ers");

  const formatedData = data.map((er: ERs) => {
    return {
      id: er.id,
      number: er.number,
      zone: er.zone,
      createdAt: new Date(er.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });
  return formatedData;
}

export function useERs() {
  return useQuery("ers", getERs, {
    staleTime: 1000 * 30, //30 Seconds
  });
}


