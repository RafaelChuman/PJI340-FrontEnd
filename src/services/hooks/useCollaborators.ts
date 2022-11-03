import { useQuery } from "react-query";
import { api } from "../api";
import { convertToDateBR, convertToWhatsAppMask } from "../utils";

export interface Collaborators {
  id: string;
  name: string;
  cep: string;
  numberAddress: string;
  cellphone: string;
  whatsApp: string;
  createdAt?: string;
}



export async function getCollaborators(): Promise<Collaborators[]> {
  const { data } = await api.get("collaborators");

  const formatedData = data.map((collaborator: Collaborators) => {
    return {
      id: collaborator.id,
      cep: collaborator.cep,
      numberAddress: collaborator.numberAddress,
      cellphone: convertToWhatsAppMask(collaborator.cellphone),
      whatsApp: convertToWhatsAppMask(collaborator.whatsApp),
      createdAt: convertToDateBR(collaborator.createdAt),
      name: collaborator.name,
    };
  });
  return formatedData;
}

export function useCollaborators() {
  return useQuery("collaborators", getCollaborators, {
    staleTime: 1000 * 30, //30 Seconds
  });
}
