import { ERs } from "@/services/hooks/useERs";
import { ChangeEvent, SetStateAction } from "react";

import { ERTableLine } from "./ERTableLine";

interface ERTableProps {
  erData: ERs[] | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function ERTable({ erData, checkBoxValues, setCheckBoxValues}: ERTableProps) {
  
  return (
    
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Número ER</th>
          <th>Zona</th>
          <th>Data de Cadastro</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {erData ? (
          
          erData.map((ctg) => {
            return <ERTableLine key={ctg.id} er={ctg} checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues}/>;
          }       )
        ) : (
          <ERTableLine er={undefined} checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues}/>
        )}
      </tbody>
    </table>
  );
}
