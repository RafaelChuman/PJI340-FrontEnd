import { ChangeEvent } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { ERs } from "../../services/hooks/useERs";

interface TableLineProps {
  er: ERs | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ERTableLine({ er, handleOnChange }: TableLineProps) {
  if (!er) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <input
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          id={er.id}
          value={er.id}
          name="ERTable"
          onChange={handleOnChange}
        ></input>
      </td>
      <td>{er.number}</td>
      <td>{er.zone.name}</td>
      <td>{er.createdAt}</td>
      <td>
        <button>
          <RiPencilLine />
          &nbsp; Editar
        </button>
      </td>
    </tr>
  );
}
