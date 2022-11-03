import { ChangeEvent, SetStateAction } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { ERs } from "../../services/hooks/useERs";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  er: ERs | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function ERTableLine({
  er,
  checkBoxValues,
  setCheckBoxValues,
}: TableLineProps) {
  if (!er) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <Checkbox
          dataOfCheckbox={er}
          checkBoxValues={checkBoxValues}
          setCheckBoxValues={setCheckBoxValues}
          title="Deletar"
          placeholder={"Deletar"}
          name="ERTable"
        ></Checkbox>
      </td>
      <td>{er.number.toString()}</td>
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
