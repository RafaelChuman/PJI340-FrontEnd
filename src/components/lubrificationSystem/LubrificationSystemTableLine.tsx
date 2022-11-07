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

export function LubrificationSystemTableLine({ lubrificationSystem, checkBoxValues, setCheckBoxValues }: TableLineProps) {
  if (!lubrificationSystem) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <Checkbox checkBoxValues={checkBoxValues} setCheckBoxValues={setCheckBoxValues} dataOfCheckbox={lubrificationSystem}
          // type={"checkbox"}
           title={"Deletar"}
           placeholder={"Deletar"}
          // id={lubrificationSystem.id}
          // value={lubrificationSystem.id}
          // name="LubrificationSystemTable"
          // onChange={handleOnChange}

        ></Checkbox>
      </td>
      <td>
        <div>
          {lubrificationSystem.activity?.name}
        </div>
      </td>
      <td>{lubrificationSystem.add}</td>
      <td>{lubrificationSystem.obs}</td>
      <td>{lubrificationSystem.collaborator?.name}</td>
      <td>{lubrificationSystem.createdAt}</td>

    </tr>
  );
}
