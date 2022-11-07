import EditERsComponent from "@/pages/ers/editERs";
import { ChangeEvent, SetStateAction } from "react";
import { IconBase } from "react-icons/lib";
import { RiPencilLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { ERs } from "../../services/hooks/useERs";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  er: ERs | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
  SetERValues: (value: SetStateAction<ERs | undefined>) => void;
}

export function ERTableLine({
  er,
  checkBoxValues,
  setCheckBoxValues,
  SetERValues,
}: TableLineProps) {
  const navigate = useNavigate();

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
        
          <button onClick={()=>SetERValues(er)}>
            <RiPencilLine />
            &nbsp; Editar
          </button>
      </td>
    </tr>
  );
}
