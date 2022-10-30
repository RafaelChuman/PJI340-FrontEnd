import { Activities } from "@/services/hooks/useActivity";
import { ChangeEvent } from "react";

import { ActivityTableLine } from "./ActivityTableLine";

interface UserTableProps {
  activityData: Activities[] | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ActivityTable({ activityData, handleOnChange }: UserTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Zona</th>
          <th>Data de Cadastro</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {activityData ? (
          activityData.map((ctg) => {
            return <ActivityTableLine key={ctg.id} activity={ctg} handleOnChange={handleOnChange}/>;
          })
        ) : (
          <ActivityTableLine activity={undefined} handleOnChange={handleOnChange}/>
        )}
      </tbody>
    </table>
  );
}
