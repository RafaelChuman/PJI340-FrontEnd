import { Activities } from "@/services/hooks/useActivity";
import { ChangeEvent, SetStateAction } from "react";

import { ActivityTableLine } from "./ActivityTableLine";

interface UserTableProps {
  activityData: Activities[] | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function ActivityTable({ activityData, checkBoxValues, setCheckBoxValues }: UserTableProps) {
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
            return <ActivityTableLine key={ctg.id} activity={ctg} checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues}/>;
          })
        ) : (
          <ActivityTableLine activity={undefined} checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues}/>
        )}
      </tbody>
    </table>
  );
}
