import { LubrificationSystems } from "@/services/hooks/useLubrificationSystems";
import { ChangeEvent } from "react";

import { LubrificationSystemTableLine } from "./LubrificationSystemTableLine";

interface UserTableProps {
  lubrificationSystemData: LubrificationSystems[] | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function LubrificationSystemTable({ lubrificationSystemData, handleOnChange }: UserTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Atividade</th>
          <th>Qnt Lub Add</th>
          <th>Obs</th>
          <th>Colaborador</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {lubrificationSystemData ? (
          lubrificationSystemData.map((ctg) => {
            return <LubrificationSystemTableLine key={ctg.id} lubrificationSystem={ctg} handleOnChange={handleOnChange}/>;
          })
        ) : (
          <LubrificationSystemTableLine lubrificationSystem={undefined} handleOnChange={handleOnChange}/>
        )}
      </tbody>
    </table>
  );
}
