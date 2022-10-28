import { useMutation, useQuery } from "react-query";
import { api } from "../api";
import { queryClient } from "../queryClient";

export interface Collaborators {
  id?: string;
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
  createdAt?: Date;
}



export async function getCollaborators(): Promise<Collaborators[]> {
  const { data } = await api.get("collaborators");

  const formatedData = data.map((collaborator: Collaborators) => {
    return {
      id: collaborator.id,
      cep: collaborator.cep,
      numberAddress: collaborator.numberAddress,
      cellphone: collaborator.cellphone,
      whatsApp: collaborator.whatsApp,
      createdAt: collaborator.createdAt,
      name: collaborator.name,
    };
  });
  return formatedData;
}

export function useCollaborators() {
  return useQuery("Collaborators", getCollaborators, {
    staleTime: 1000 * 30, //30 Seconds
  });
}
