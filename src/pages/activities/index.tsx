import { Pagination } from "@/components/Pagination";
import { SubmitHandler, useForm } from "react-hook-form";
import { returnPaginatedData } from "@/services/utils";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "react-query";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";
import { Container } from "./activities.styled";
import { Activities, useActivities } from "@/services/hooks/useActivity";
import { ActivityTable } from "@/components/activities/ActivityTable";
import { RiAddFill, RiCloseFill } from "react-icons/ri";

export default function ActivitiesComponent() {
  const today = new Date();
  const numberOfItensPerPage = 5;

  const { register, handleSubmit, formState } = useForm<Activities>();
  const [checkBoxValues, setCheckBoxValues] = useState<String[]>();

  const formDeletion = useForm();

  const [ErrorActivity, setErrorActivity] = useState("");

  const [activityCurrentPage, setActivityCurrentPage] = useState(1);

  const activitiesWithoutPagination = useActivities();

  let activities;

  const createActivity = useMutation(
    async (activity: Activities) => {
      const response = await api.post("activities", {
        name: activity.name,
      });

      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("activities");
      },
    }
  );

  if (activitiesWithoutPagination.data) {
    activities = returnPaginatedData<Activities>(
      activitiesWithoutPagination.data,
      activityCurrentPage,
      numberOfItensPerPage
    );
  }

  const name = register("name", {
    required: "Nome da Atividade é obrigatório",
    minLength: {
      value: 3,
      message: "O Nome da Atividade  deve ter pelo menos 3 caracteres",
    },
    maxLength: {
      value: 10,
      message: "O Nome da Atividade  deve ter no máximo 10 caracteres",
    },
  });

  const handleCreateActivity: SubmitHandler<Activities> = async (
    values: Activities
  ) => {
    const response = await createActivity.mutateAsync(values);

    if (response.status == 200) {
      const mesage = response.status;
      if (mesage != undefined) {
        setErrorActivity(mesage.toString());
      }
    }
  };

  async function handleDelete() {

    const response = await api.delete(`activities`, {
      data: {
        ids: checkBoxValues,
      },
    });

    if (activities.length == checkBoxValues?.length) {
      if (activityCurrentPage > 1)
        setActivityCurrentPage(activityCurrentPage - 1);
    }

    setCheckBoxValues([]);

    await queryClient.invalidateQueries("activities");
  }

  return (
    <Container>
      <h1>Atividades</h1>
      <div>
        <form
          onSubmit={handleSubmit(handleCreateActivity)}
          className="zonaContent"
          title={"Form Criar Serviço"}
          placeholder={"Form Criar Serviço"}
        >
          <p>{ErrorActivity}</p>
          <div>
            <label>Insira a descrição do Serviço:</label>
            <input
              width="100%"
              alt="Serviço"
              type="text"
              title="Serviço"
              placeholder="Serviço"
              {...name}
            />
            <ErrorMessage errors={formState.errors} name="name" />
          </div>
          <div>
            <button type={"submit"} disabled={formState.isSubmitting}>
              {formState.isSubmitting ? (
                "..."
              ) : (
                <>
                  <RiAddFill /> Salvar
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {activitiesWithoutPagination.isLoading ? (
        "..."
      ) : activitiesWithoutPagination.error ? (
        <p>Falha ao Obter Dados</p>
      ) : (
        activitiesWithoutPagination.data && (
          <form
            title={"Form Excluir Serviço"}
            placeholder={"Form Excluir Serviço"}
            onSubmit={formDeletion.handleSubmit(handleDelete)}
          >
            <div className="ActivityTableContent">
              <ActivityTable
                activityData={activities}
                checkBoxValues={checkBoxValues}
                setCheckBoxValues={setCheckBoxValues}
              />
            </div>
            <div>
              <Pagination
                totalCountOfRegisters={activitiesWithoutPagination.data.length}
                currentPage={activityCurrentPage}
                registersPerPage={numberOfItensPerPage}
                onPageClick={setActivityCurrentPage}
              ></Pagination>
            </div>
            <button type="submit" className="DeleteButton">
              <RiCloseFill />
              Excluir
            </button>
          </form>
        )
      )}
    </Container>
  );
}
