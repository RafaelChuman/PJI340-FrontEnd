import { Header } from "@/components/Header";
import { SideBar } from "@/components/SideBar";
import { Pagination } from "@/components/Pagination";
import { Container } from "@/components/Header/Header.styled";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {
  Collaborators,
  useCollaborators,
} from "@/services/hooks/useCollaborators";
import { CollaboratorTable } from "@/components/collaborators/CollaboratorTable";
import { checkBoxClickEvent, returnPaginatedData } from "@/services/utils";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "react-query";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";
import InputMask from "react-input-mask";

export default function CollaboratorsComponent() {
  const today = new Date();
  const numberOfItensPerPage = 5;

  const { register, handleSubmit, formState, control } =
    useForm<Collaborators>();

  const [ErrorCollaborator, setErrorCollaborator] = useState("");

  const [collaboratorCurrentPage, setCollaboratorCurrentPage] = useState(1);
  const [collaboratorNumberPage, setCollaboratorNumberPage] = useState(1);

  const collaboratorsWithoutPagination = useCollaborators();

  const formDeletion = useForm();
  const [checkBoxValues, setCheckBoxValues] = useState<String[]>();

  let collaborators;

  const createCollaborator = useMutation(
    async (collaborator: Collaborators) => {
      const response = await api.post("collaborators", {
        name: collaborator.name,
        whatsApp: collaborator.whatsApp,
        cellphone: collaborator.cellphone,
        cep: collaborator.cep,
        numberAddress: collaborator.numberAddress,
      });

      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("collaborators");
      },
    }
  );

  if (collaboratorsWithoutPagination.data) {
    collaborators = returnPaginatedData<Collaborators>(
      collaboratorsWithoutPagination.data,
      collaboratorCurrentPage,
      numberOfItensPerPage
    );
  }

  const name = register("name", {
    required: "Nome do Collaborador é obrigatório",
    minLength: {
      value: 5,
      message: "O Nome do  Collaborador deve ter pelo menos 5 caracteres",
    },
    maxLength: {
      value: 30,
      message: "O Nome do Collaborador deve ter no máximo 30 caracteres",
    },
  });

  const cep = register("cep", {
    required: "O CEP é obrigatório",
    pattern: {value: /[0-9]{2}\.[0-9]{3}\-[0-9]{3}/g, message:"CEP inválido."},
    
  });

  const numberAddress = register("numberAddress", {
    required: "O Número é obrigatório",
    minLength: {
      value: 1,
      message: "O Número deve ter pelo menos 1 caracteres",
    },
    maxLength: {
      value: 8,
      message: "O Número deve ter no máximo 8 caracteres",
    },
  });

  const cellphone = register("cellphone", {
    required: "O Celular é obrigatório",
    pattern: {value: /\([0-9]{2}\) [9] [0-9]{4}\-[0-9]{4}/g, message:"Celular inválido."},
  });

  const whatsApp = register("whatsApp", {
    required: { value: false, message: "O Contato por Whatsapp é opcional" },
    pattern: {value: /\([0-9]{2}\) [9] [0-9]{4}\-[0-9]{4}/g, message:"whatsApp inválido."},
  });

  const handleCreateCollaborator: SubmitHandler<Collaborators> = async (
    values: Collaborators
  ) => {
    
    values.cep = values.cep.toString().replace(/[^0-9]/g, '');
    values.cellphone = values.cellphone.toString().replace(/[^0-9]/g, '');
    values.whatsApp = values.whatsApp.toString().replace(/[^0-9]/g, '');

    const response = await createCollaborator.mutateAsync(values);

    

    if (response.status == 200) {
      const mesage = response.status;

      if (mesage != undefined) {
        setErrorCollaborator(mesage.toString());
      }
      
    }
  };

  async function handleDelete() {
   
    checkBoxValues?.map(
      async (collaboratorToDelete) => {
        const response = await api.delete(`collaborators/?id=${collaboratorToDelete}`);

        return response;
      },
    );

    queryClient.invalidateQueries("collaborators");

    if(collaborators.length == checkBoxValues?.length)
    {
      if(collaboratorCurrentPage > 1){
        setCollaboratorCurrentPage(collaboratorCurrentPage-1)
      } 
    }
    setCheckBoxValues([]);
    
  }

  async function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {

    checkBoxClickEvent(event, checkBoxValues, setCheckBoxValues);
  }

  return (
    <div>
      <Container>
        <div>
          <form onSubmit={handleSubmit(handleCreateCollaborator)}>
            <p>{ErrorCollaborator}</p>
            <div>
              <input
                alt="Collaborador"
                type="text"
                title="Collaborador"
                placeholder="Collaborador"
                {...name}
              />
              <ErrorMessage errors={formState.errors} name="name" />
              <InputMask
                alt="CEP"
                type="text"
                title="CEP"
                placeholder="__.___ - ___"
                mask={"99.999-999"}
                {...cep}
              />
              <ErrorMessage errors={formState.errors} name="cep" />

              <input
                alt="Número"
                type="text"
                title="Número"
                placeholder="Número"
                {...numberAddress}
              />
              <ErrorMessage errors={formState.errors} name="numberAddress" />

              <InputMask
                alt="Celular"
                type="text"
                title="Celular"
                placeholder="(__) 9 ____ - ____"
                mask={"(99) 9 9999-9999"}
                {...cellphone}
              />
              <ErrorMessage errors={formState.errors} name="cellphone" />

              <InputMask
                alt="WhatsApp"
                type="text"
                title="whatsApp"
                placeholder="(__) 9 ____ - ____"
                mask={"(99) 9 9999-9999"}
                {...whatsApp}
              />
              <ErrorMessage errors={formState.errors} name="whatsApp" />
            </div>
            <button type={"submit"} disabled={formState.isSubmitting}>
              {formState.isSubmitting ? "..." : "Enviar"}
            </button>
          </form>
        </div>

        {collaboratorsWithoutPagination.isLoading ? (
          "..."
        ) : collaboratorsWithoutPagination.error ? (
          <div>
            <p>Falha ao Obter Dados</p>
          </div>
        ) : (

          <div className="TreatmentTableContainer">
             <form
            title={"Form Excluir Colaborador"}
            placeholder={"Form Excluir Colaborador"}
            onSubmit={formDeletion.handleSubmit(handleDelete)}
          >
            {collaboratorsWithoutPagination.data && (
              <>
                <CollaboratorTable collaboratorsData={collaborators} handleOnChange={handleOnChange}/>

                <Pagination
                  totalCountOfRegisters={collaboratorsWithoutPagination.data.length}
                  currentPage={collaboratorCurrentPage}
                  registersPerPage={numberOfItensPerPage}
                  onPageClick={setCollaboratorCurrentPage}
                ></Pagination>
              </>
            )}
            <button type="submit">Excluir</button>
          </form>
          </div>
        )}
      </Container>
    </div>
  );
}
