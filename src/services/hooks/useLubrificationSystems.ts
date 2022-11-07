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

export async function getLubrificationSystems(): Promise<LubrificationSystems[]> {
  const { data } = await api.get("lubrificationSystems");

  const formatedData = data.map((lubrificationSystem: LubrificationSystems) => {
    return {
      id: lubrificationSystem.id,
      createdAt: new Date(lubrificationSystem.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      add: lubrificationSystem.add.toString(),
      obs: lubrificationSystem.obs,
      activity: lubrificationSystem.activity,
      collaborator: lubrificationSystem.collaborator,
    };
  });
  return formatedData;
}

export function useLubrificationSystems() {
  return useQuery("lubrificationSystems", getLubrificationSystems, {
    staleTime: 1000 * 30, //30 Seconds
  });
}


