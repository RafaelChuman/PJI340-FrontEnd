import { Collaborators } from "@/services/hooks/useCollaborators";
import { CollaboratorTableLine } from "./CollaboratorTableLine";


interface CollaboratorTableProps {
  collaboratorsData: Collaborators[] | undefined;
}

export function CollaboratorTable({ collaboratorsData }: CollaboratorTableProps) {
  return (
    <table >
      <thead>
        <tr>
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
              />
            );
          })
        ) : (
          <CollaboratorTableLine key="0" collaborators={undefined} />
        )}
      </tbody>
    </table>
  );
}
