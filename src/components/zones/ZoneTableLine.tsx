import { ChangeEvent } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { Zones } from "../../services/hooks/useZones";

interface TableLineProps {
  zone: Zones | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ZoneTableLine({ zone, handleOnChange }: TableLineProps) {
  if (!zone) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <input
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          id={zone.id}
          value={zone.id}
          name="ZoneTable"
          onChange={handleOnChange}
        ></input>
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
