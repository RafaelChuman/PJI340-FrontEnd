import { api } from "@/services/api";
import { Collaborators } from "@/services/hooks/useCollaborators";
import { queryClient } from "@/services/queryClient";
import { ErrorMessage } from "@hookform/error-message";
import { SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiRefreshLine } from "react-icons/ri";
import { useMutation } from "react-query";
import { Container } from "./collaborators.styled";
import InputMask from "react-input-mask";

interface EditCollaboratorProps {
  collaborator: Collaborators;
  setCheckBoxValues: (value: SetStateAction<String[] | undefined>) => void;
  setCollaborator: (value: SetStateAction<Collaborators | undefined>) => void;
}

export default function EditCollaboratorComponent({
  collaborator,
  setCollaborator,
  setCheckBoxValues,
}: EditCollaboratorProps) {
  const { register, handleSubmit, formState } = useForm<Collaborators>();

  const editCollaborator = useMutation(
    async (collaboratorUpd: Collaborators) => {
      const response = await api.put("collaborators", {
        id: collaborator.id,
        name: collaboratorUpd.name,
        cep: collaboratorUpd.cep,
        cellphone: collaboratorUpd.cellphone,
        whatsApp: collaboratorUpd.whatsApp,
        numberAddress: collaboratorUpd.numberAddress,
      });

      return response;
    },
    {
      onSuccess: () => {
        setCollaborator(undefined);
        setCheckBoxValues([]);
        queryClient.invalidateQueries("collaborators");
      },
    }
  );

  const handleEditCollaborator: SubmitHandler<Collaborators> = async (
    values: Collaborators
  ) => {
    const response = await editCollaborator.mutateAsync(values);

    if (response.status == 200) {
      const mesage = response.status;
    }
  };

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
    pattern: {
      value: /[0-9]{2}\.[0-9]{3}\-[0-9]{3}/g,
      message: "CEP inválido.",
    },
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
    pattern: {
      value: /\([0-9]{2}\) [9] [0-9]{4}\-[0-9]{4}/g,
      message: "Celular inválido.",
    },
  });

  const whatsApp = register("whatsApp", {
    required: { value: false, message: "O Contato por Whatsapp é opcional" },
    pattern: {
      value: /\([0-9]{2}\) [9] [0-9]{4}\-[0-9]{4}/g,
      message: "whatsApp inválido.",
    },
  });

  return (
    <Container>
      <h1>Colaborador</h1>

      <div>
        <div className="DivFormFields">
          <label>ID:</label>
          <label>{collaborator.id}</label>
        </div>
        <div className="DivFormFields">
          <label>Nome da Atividade:</label>
          <label>{collaborator.name}</label>
        </div>
        <div className="DivFormFields">
          <label>Data Criação:</label>
          <label>{collaborator.whatsApp}</label>
        </div>
        <div className="DivFormFields">
          <label>Data Criação:</label>
          <label>{collaborator.cellphone}</label>
        </div>
        <div className="DivFormFields">
          <label>Data Criação:</label>
          <label>{collaborator.cep}</label>
        </div>
        <div className="DivFormFields">
          <label>Data Criação:</label>
          <label>{collaborator.numberAddress}</label>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleSubmit(handleEditCollaborator)}
          className="collaboratorContent"
          title={"Form Editar Serviço"}
          placeholder={"Form Editar Serviço"}
        >
          <div className="DivFormFields">
            {" "}
            <label>Insira o Nome:</label>
            <input
              alt="Collaborador"
              type="text"
              title="Collaborador"
              placeholder="Collaborador"
              defaultValue={collaborator.name}
              {...name}
            />
            <ErrorMessage errors={formState.errors} name="name" />
          </div>
          <div className="DivFormFields">
            <label>Insira o CEP:</label>
            <InputMask
              alt="CEP"
              type="text"
              title="CEP"
              placeholder="__.___ - ___"
              mask={"99.999-999"}
              defaultValue={collaborator.cep}
              {...cep}
            />
            <ErrorMessage errors={formState.errors} name="cep" />
          </div>

          <div className="DivFormFields">
            <label>Insira o Número:</label>
            <input
              alt="Número"
              type="text"
              title="Número"
              placeholder="Número"
              defaultValue={collaborator.numberAddress}
              {...numberAddress}
            />
            <ErrorMessage errors={formState.errors} name="numberAddress" />
          </div>
          <div className="DivFormFields">
            <label>Insira o Telefone:</label>
            <InputMask
              alt="Celular"
              type="text"
              title="Celular"
              placeholder="(__) 9 ____ - ____"
              mask={"(99) 9 9999-9999"}
              defaultValue={collaborator.cellphone}
              {...cellphone}
            />
            <ErrorMessage errors={formState.errors} name="cellphone" />
          </div>

          <div className="DivFormFields">
            <label>Insira o WhatsApp:</label>
            <InputMask
              alt="WhatsApp"
              type="text"
              title="whatsApp"
              placeholder="(__) 9 ____ - ____"
              mask={"(99) 9 9999-9999"}
              defaultValue={collaborator.whatsApp}
              {...whatsApp}
            />
            <ErrorMessage errors={formState.errors} name="whatsApp" />
          </div>

          <div>
            <button type={"submit"} disabled={formState.isSubmitting}>
              {formState.isSubmitting ? (
                "..."
              ) : (
                <>
                  <RiRefreshLine /> Editar
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
}
