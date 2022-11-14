import { ChangeEvent, SetStateAction } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { Zones } from "../../services/hooks/useZones";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  zone: Zones | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
  SetZone: (value: SetStateAction<Zones | undefined>) => void;
}

export function ZoneTableLine({ zone, checkBoxValues, setCheckBoxValues, SetZone }: TableLineProps) {
  if (!zone) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <Checkbox
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          dataOfCheckbox={zone}
          name="ZoneTable"
          checkBoxValues={checkBoxValues}
          setCheckBoxValues={setCheckBoxValues}
        ></Checkbox>
      </td>
      <td>
        
          {zone.name}
        
      </td>
      <td>{zone.createdAt}</td>
      <td>
        <button onClick={()=>SetZone(zone)}>
          <RiPencilLine ></RiPencilLine>
          &nbsp; Editar
        </button>
      </td>
    </tr>
  );
}
