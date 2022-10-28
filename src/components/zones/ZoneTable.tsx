import { Zones } from "@/services/hooks/useZones";
import { ChangeEvent } from "react";

import { ZoneTableLine } from "./ZoneTableLine";

interface UserTableProps {
  zoneData: Zones[] | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ZoneTable({ zoneData, handleOnChange }: UserTableProps) {
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
        {zoneData ? (
          zoneData.map((ctg) => {
            return <ZoneTableLine key={ctg.id} zone={ctg} handleOnChange={handleOnChange}/>;
          })
        ) : (
          <ZoneTableLine zone={undefined} handleOnChange={handleOnChange}/>
        )}
      </tbody>
    </table>
  );
}
