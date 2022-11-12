import { ChangeEvent, SetStateAction } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { Zones } from "../../services/hooks/useZones";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  zone: Zones | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function ZoneTableLine({ zone, checkBoxValues, setCheckBoxValues }: TableLineProps) {
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
        <div>
          <p>{zone.name}</p>
        </div>
      </td>
      <td>{zone.createdAt}</td>
      <td>
        <button>
          <RiPencilLine />
          &nbsp; Editar
        </button>
      </td>
    </tr>
  );
}
