import { Collaborators } from "@/services/hooks/useCollaborators";
import { ChangeEvent, SetStateAction } from "react";
import { CollaboratorTableLine } from "./CollaboratorTableLine";

interface CollaboratorTableProps {
  collaboratorsData: Collaborators[] | undefined;
  checkBoxValues: String[] | undefined;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
  setCollaborator: (value: SetStateAction<Collaborators | undefined>) => void;
}

export function CollaboratorTable({
  collaboratorsData,
  checkBoxValues,
  setCheckBoxValues,
  setCollaborator
}: CollaboratorTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Nome</th>
          <th>WhatsApp</th>
          <th>Data Criação</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {collaboratorsData !== undefined ? (
          collaboratorsData.map((collaborators) => {
            return (
              <CollaboratorTableLine
                key={collaborators.id}
                collaborators={collaborators}
                checkBoxValues={checkBoxValues}
                setCheckBoxValues={setCheckBoxValues}
                setCollaborator={setCollaborator}
              />
            );
          })
        ) : (
          <CollaboratorTableLine
            key="0"
            collaborators={undefined}
            checkBoxValues={checkBoxValues}
            setCheckBoxValues={setCheckBoxValues}
            setCollaborator={setCollaborator}
          />
        )}
      </tbody>
    </table>
  );
}
