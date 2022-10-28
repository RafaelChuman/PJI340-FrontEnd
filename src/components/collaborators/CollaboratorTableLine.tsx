import { RiPencilLine } from "react-icons/ri";
import { convertToBRL } from "@/services/utils";
import { Collaborators } from "@/services/hooks/useCollaborators";

interface TableLineProps {
  collaborators: Collaborators | undefined;
}

export function CollaboratorTableLine({ collaborators }: TableLineProps) {
  if (!collaborators) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <p>{collaborators.name}</p>
      </td>
      <td>
        <p>{collaborators.whatsApp}</p>
      </td>
      <td>
          <p>collaborators.createdAt</p>
      </td>
      <td>
        <button>
          <RiPencilLine fontSize="16" />
          <p>&nbsp; Editar</p>
        </button>
      </td>
    </tr>
  );
}
