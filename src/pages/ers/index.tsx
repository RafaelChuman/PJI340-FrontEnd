import { Pagination } from "@/components/Pagination";
import { SubmitHandler, useForm } from "react-hook-form";
import { returnPaginatedData } from "@/services/utils";
import { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useMutation } from "react-query";
import { api } from "@/services/api";
import { queryClient } from "@/services/queryClient";
import { useERs, ERs } from "@/services/hooks/useERs";
import { Container } from "./ers.styled";
import { ERTable } from "@/components/ers/ERTable";
import { useZones, Zones } from "@/services/hooks/useZones";
import { ComboBox } from "@/components/ComboBox";
import EditERsComponent from "./editERs";
import { RiCloseFill, RiAddFill} from "react-icons/ri";

export default function ERsComponent() {
  const today = new Date();
  const numberOfItensPerPage = 5;

  const { register, handleSubmit, formState } = useForm<ERs>();
  const [checkBoxValues, setCheckBoxValues] = useState<String[]>();
  const [comboxBoxValues, setComboBoxValues] = useState<String[]>();
  const [er, setER] = useState<ERs>();

  const formDeletion = useForm();

  const [ErrorER, setErrorER] = useState("");

  const [erCurrentPage, setERCurrentPage] = useState(1);

  const ersWithoutPagination = useERs();

  const zonesWithoutFormat = useZones();

  let ers;
  let zones;

  const createER = useMutation(
    async (er: ERs) => {
      const response = await api.post("ers", {
        number: er.number,
        zone: er.zone,
      });

      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("ers");
      },
    }
  );

  if (ersWithoutPagination.data) {
    ers = returnPaginatedData<ERs>(
      ersWithoutPagination.data,
      erCurrentPage,
      numberOfItensPerPage
    );
  }

  const number = register("number", {
    required: "O Número da ER é obrigatório",
    min: {
      value: 1,
      message: "O Número da ER deve ser maior que 0.",
    },
    maxLength: {
      value: 1000,
      message: "O Número da ER deve ser menor que 1000.",
    },
    valueAsNumber: true,
  });

  const zone = register("zone", {
    required: "O Zona é obrigatório",
  });

  const handleCreateER: SubmitHandler<ERs> = async (values: ERs) => {
    console.log(values);
    const response = await createER.mutateAsync(values);

    if (response.status == 200) {
      const mesage = response.status;
      if (mesage != undefined) {
        setErrorER(mesage.toString());
      }
    }
  };

  async function handleDelete() {
    checkBoxValues?.map(async (erToDelete) => {
      const response = await api.delete(`ers/?id=${erToDelete}`);

      return response;
    });

    if (ers.length == checkBoxValues?.length) {
      if (erCurrentPage > 1) setERCurrentPage(erCurrentPage - 1);
    }

    setCheckBoxValues([]);

    queryClient.invalidateQueries("ers");
  }

  if (er) {
    return <EditERsComponent {...er} />;
  } else {
    return (
      <Container>
        <div>
          <form
            onSubmit={handleSubmit(handleCreateER)}
            className="zonaContent"
            title={"Form Criar Zona"}
            placeholder={"Form Criar Zona"}
          >
            <p>{ErrorER}</p>
            <div>
              <input
                width="100%"
                alt="Número"
                type="number"
                title="Número"
                placeholder="Número da ER"
                {...number}
              />
              <ErrorMessage errors={formState.errors} name="number" />
            </div>

            <div>
              {zonesWithoutFormat.data ? (
                <ComboBox
                  comboboxData={zonesWithoutFormat.data}
                  handleClick={() => console.log("Combobox Clicked")}
                  title={"Zones"}
                  {...zone}
                ></ComboBox>
              ) : (
                <></>
              )}

              <ErrorMessage errors={formState.errors} name="zone" />
            </div>

            <div>
              <button type={"submit"} disabled={formState.isSubmitting}>
                {formState.isSubmitting ? "..." : <><RiAddFill/> Salvar</>}
              </button>
            </div>
          </form>
        </div>

        {ersWithoutPagination.isLoading ? (
          "..."
        ) : ersWithoutPagination.error ? (
          <p>Falha ao Obter Dados</p>
        ) : (
          ersWithoutPagination.data && (
            <form
              title={"Form Excluir ER"}
              placeholder={"Form Excluir ER"}
              onSubmit={formDeletion.handleSubmit(handleDelete)}
            >
              <div className="ERTableContent">
                <ERTable
                  erData={ers}
                  checkBoxValues={checkBoxValues}
                  setCheckBoxValues={setCheckBoxValues}
                  SetERValues={setER}
                />
              </div>
              <div>
                <Pagination
                  totalCountOfRegisters={ersWithoutPagination.data.length}
                  currentPage={erCurrentPage}
                  registersPerPage={numberOfItensPerPage}
                  onPageClick={setERCurrentPage}
                ></Pagination>
              </div>
              <button type="submit" className="DeleteButton">
                <RiCloseFill/> Excluir
              </button>
            </form>
          )
        )}
      </Container>
    );
  }
}
