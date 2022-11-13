import { ChangeEvent, SetStateAction } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { LubrificationSystems } from "../../services/hooks/useLubrificationSystems";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  lubrificationSystem: LubrificationSystems | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function LubrificationSystemTableLine({
  lubrificationSystem,
  checkBoxValues,
  setCheckBoxValues,
}: TableLineProps) {
  if (!lubrificationSystem) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <Checkbox
          checkBoxValues={checkBoxValues}
          setCheckBoxValues={setCheckBoxValues}
          dataOfCheckbox={lubrificationSystem}
          title={"Deletar"}
          placeholder={"Deletar"}
        ></Checkbox>
      </td>
      <td>{lubrificationSystem.activity?.name}</td>
      <td>{lubrificationSystem.add}</td>
      <td>{lubrificationSystem.obs}</td>
      <td>{lubrificationSystem.collaborator?.name}</td>
      <td>{lubrificationSystem.createdAt}</td>
    </tr>
  );
}
