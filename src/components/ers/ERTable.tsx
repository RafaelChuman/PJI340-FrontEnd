import { ERs } from "@/services/hooks/useERs";
import { ChangeEvent } from "react";

import { ERTableLine } from "./ERTableLine";

interface ERTableProps {
  erData: ERs[] | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ERTable({ erData, handleOnChange }: ERTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Número ER</th>
          <th>Zona</th>
          <th>Data de Cadastro</th>
        </tr>
      </thead>
      <tbody>
        {erData ? (
          erData.map((ctg) => {
            return <ERTableLine key={ctg.id} er={ctg} handleOnChange={handleOnChange}/>;
          })
        ) : (
          <ERTableLine er={undefined} handleOnChange={handleOnChange}/>
        )}
      </tbody>
    </table>
  );
}
