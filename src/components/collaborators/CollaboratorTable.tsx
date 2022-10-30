import { Collaborators } from "@/services/hooks/useCollaborators";
import { ChangeEvent } from "react";
import { CollaboratorTableLine } from "./CollaboratorTableLine";


interface CollaboratorTableProps {
  collaboratorsData: Collaborators[] | undefined;
  handleOnChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function CollaboratorTable({ collaboratorsData, handleOnChange }: CollaboratorTableProps) {
  return (
    <table >
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
                handleOnChange={handleOnChange}
              />
            );
          })
        ) : (
          <CollaboratorTableLine key="0" collaborators={undefined}  handleOnChange={handleOnChange}/>
        )}
      </tbody>
    </table>
  );
}
