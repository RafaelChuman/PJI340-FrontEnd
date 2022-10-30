import { Activities } from "@/services/hooks/useActivity";
import { ChangeEvent } from "react";
import { RiPencilLine } from "react-icons/ri";

interface TableLineProps {
  activity: Activities | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function ActivityTableLine({ activity, handleOnChange }: TableLineProps) {
  if (!activity) {
    return <></>;
  }

  return (
    <tr>
      <td>
        <input
          type={"checkbox"}
          title={"Deletar"}
          placeholder={"Deletar"}
          id={activity.id}
          value={activity.id}
          name="ActivityTable"
          onChange={handleOnChange}
        ></input>
      </td>
      <td>
        <div>
          <p>{activity.name}</p>
        </div>
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
