import { useQuery } from "react-query";
import { api } from "../api";
import { convertToDateBR } from "../utils";

export interface User {
    id: string;
    name: string;
    userName: string;
    password: string;
    cep: string;
    numberAddress: string;
    cellphone: string;
    whatsApp: string;
    created_at: string;
    isAdmin: boolean;
  }


  export interface UserGroupedByData {
    count: number;
    date_trunc: Date;
  }


  export async function getUsersByMonth(): Promise<UserGroupedByData[]> {
    const { data } = await api.get(`users/?groupByMonth=True`);
  
    const formatedData = data.map((user: UserGroupedByData) => {
      return {
        count: user.count,
        date_trunc: new Date(user.date_trunc).toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "2-digit",
          year: "2-digit",
        }),
      };
    });
    return formatedData;
  }

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get("users");

  const formatedData = data.map((user: User) => {
    return {
      id: user.id,
      name: user.name,
      userName: user.userName,
      password: user.password,
      cep: user.cep,
      numberAddress: user.numberAddress,
      cellphone: user.cellphone,
      whatsApp: user.whatsApp,
      created_at: convertToDateBR(user.created_at),
      isAdmin: user.isAdmin,
    };
  });
  return formatedData;
}

export function useUsers() {
  return useQuery("Users", getUsers, {
    staleTime: 1000 * 300, //5 min
  });
}

export function useUsersByMonth() {
  return useQuery("UsersByMonth", getUsersByMonth, {
    staleTime: 1000 * 300, //5 min
  });
}
