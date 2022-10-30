import { RiPencilLine } from "react-icons/ri";
import { convertToBRL } from "@/services/utils";
import { Collaborators } from "@/services/hooks/useCollaborators";
import { ChangeEvent } from "react";

interface TableLineProps {
  collaborators: Collaborators | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CollaboratorTableLine({ collaborators, handleOnChange }: TableLineProps) {
  if (!collaborators) {
    return <></>;
  }

  return (
    <tr>
      <td>
      <input
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          id={collaborators.id}
          value={collaborators.id}
          name="collaboratorsTable"
          onChange={handleOnChange}
        ></input>
      </td>
      <td>
        <p>{collaborators.name}</p>
      </td>
      <td>
        <p>{collaborators.whatsApp}</p>
      </td>
      <td>
          <p>{collaborators.createdAt}</p>
      </td>
      <td>
        <button>
          <RiPencilLine fontSize="16" />
           Editar
        </button>
      </td>
    </tr>
  );
}
