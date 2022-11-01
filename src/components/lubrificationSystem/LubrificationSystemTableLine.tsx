import { ChangeEvent } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { LubrificationSystems } from "../../services/hooks/useLubrificationSystems";

interface TableLineProps {
  lubrificationSystem: LubrificationSystems | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function LubrificationSystemTableLine({ lubrificationSystem, handleOnChange }: TableLineProps) {
  if (!lubrificationSystem) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <input
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          id={lubrificationSystem.id}
          value={lubrificationSystem.id}
          name="LubrificationSystemTable"
          onChange={handleOnChange}
        ></input>
      </td>
      <td>
        <div>
          {lubrificationSystem.activity.name}
        </div>
      </td>
      <td>{lubrificationSystem.add}</td>
      <td>{lubrificationSystem.obs}</td>
      <td>{lubrificationSystem.collaborator.name}</td>
      <td>{lubrificationSystem.createdAt}</td>
      <td>
        <button>
          <RiPencilLine />
          &nbsp; Editar
        </button>
      </td>
    </tr>
  );
}
