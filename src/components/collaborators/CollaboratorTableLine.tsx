import { RiPencilLine } from "react-icons/ri";
import { convertToBRL } from "@/services/utils";
import { Collaborators } from "@/services/hooks/useCollaborators";
import { ChangeEvent, SetStateAction } from "react";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  collaborators: Collaborators | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
  setCollaborator: (value: SetStateAction<Collaborators | undefined>) => void;
}

export function CollaboratorTableLine({ collaborators, checkBoxValues, setCheckBoxValues, setCollaborator }: TableLineProps) {
  if (!collaborators) {
    return <></>;
  }

  return (
    <tr>
      <td>
      <Checkbox
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          name="collaboratorsTable"
          checkBoxValues={checkBoxValues}
          dataOfCheckbox={collaborators}
          setCheckBoxValues={setCheckBoxValues}
        ></Checkbox>
      </td>
      <td>
        {collaborators.name}
      </td>
      <td>
        {collaborators.whatsApp}
      </td>
      <td>
         {collaborators.createdAt}
      </td>
      <td>
        <button type="button" onClick={()=>{setCollaborator(collaborators)}}>
          <RiPencilLine fontSize="16" />
           Editar
        </button>
      </td>
    </tr>
  );
}
