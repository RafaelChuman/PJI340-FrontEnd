import { Activities } from "@/services/hooks/useActivity";
import { ChangeEvent, SetStateAction } from "react";
import { RiPencilLine } from "react-icons/ri";
import { Checkbox } from "../CheckBox";

interface TableLineProps {
  activity: Activities | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
}

export function ActivityTableLine({ activity, checkBoxValues, setCheckBoxValues }: TableLineProps) {
  if (!activity) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <Checkbox
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          name="ActivityTable"
          checkBoxValues={checkBoxValues}
          dataOfCheckbox={activity}
          setCheckBoxValues={setCheckBoxValues}
        ></Checkbox>
      </td>
      <td>{activity.name}
      </td>
      <td>{activity.createdAt}</td>
      <td>
        <button>
          <RiPencilLine />
          &nbsp; Editar
        </button>
      </td>
    </tr>
  );
}
