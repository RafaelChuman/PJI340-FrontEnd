import { ComboBoxMultiple } from "@/components/ComboBoxMultiple";
import { DateInput } from "@/components/DateInput";
import { useZones } from "@/services/hooks/useZones";
import { ModalContainer } from "./dashboard.styled";
import { Zones } from "@/services/entities";
import React, { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

export interface GraphiclOilUsed {
  dateBegin: Date;
  dateEnd: Date;
  zones: Zones[];
}

export interface DashboardModalProps {
  graphiclOilUsed: GraphiclOilUsed;
  toggle: () => void;
  setGraphicOilUsed: React.Dispatch<React.SetStateAction<GraphiclOilUsed>>;
}

export function DashboardModalOilUsed({
  graphiclOilUsed,
  toggle,
  setGraphicOilUsed,
}: DashboardModalProps) {
  // Function to update only the dateBegin property
  const updateDateBegin = (newDateBegin: Date) => {
    setGraphicOilUsed((prevGraphiclOilUsed) => ({
      ...prevGraphiclOilUsed,
      dateBegin: newDateBegin,
    }));
  };

  // Function to update only the dateEnd property
  const updateDateEnd = (newDateEnd: Date) => {
    setGraphicOilUsed((prevGraphiclOilUsed) => ({
      ...prevGraphiclOilUsed,
      dateEnd: newDateEnd,
    }));
  };

  // Function to update only the zones property
  const updateZones = (newZones: Zones[]) => {
    setGraphicOilUsed((prevZones) => ({
      ...prevZones,
      zones: newZones,
    }));
  };

  const zonesWithoutFormat = useZones();
  const ContainerStyled = ModalContainer();

  async function handleApplyFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    toggle();
  }

  return (
    <>
      {zonesWithoutFormat.data ? (
        <ContainerStyled>
          <form
            onSubmit={(e) => handleApplyFilter(e)}
            title={"Form Filtro Gráfico"}
            placeholder={"Form Filtro Gráfico"}
          >
            <div className="divFields">
              <label>Data Início</label>

              <DateInput
                date={graphiclOilUsed.dateBegin}
                setDate={updateDateBegin}
              ></DateInput>
            </div>
            <div className="divFields">
              <label>Data Término</label>
              <DateInput
                date={graphiclOilUsed.dateEnd}
                setDate={updateDateEnd}
              ></DateInput>
            </div>

            <div className="divFields">
              <label>Selecione a Zona: </label>

              <ComboBoxMultiple
                comboBoxData={zonesWithoutFormat.data}
                comboBoxDefaultValues={graphiclOilUsed.zones}
                comboBoxSetValues={updateZones}
              ></ComboBoxMultiple>
            </div>
            <div className="divFields">
              {/* <button type={"submit"} disabled={formState.isSubmitting} onClick={toggle}> Aplicar</button> */}
              <button type={"submit"}> Aplicar</button>
            </div>
          </form>
        </ContainerStyled>
      ) : (
        <></>
      )}
    </>
  );
}


// export function DashboardModalOilUsed({
//   graphiclOilUsed,
//   toggle,
//   setGraphicOilUsed,
// }: DashboardModalProps) {

//   const zonesWithoutFormat = useZones();
//   const ContainerStyled = ModalContainer();

//   async function handleApplyFilter(e: React.FormEvent<HTMLFormElement>){

//     e.preventDefault();

//     console.log(newDateBegin)
//   };

//   return (
//     <>
//       {zonesWithoutFormat.data ? (
//         <ContainerStyled>
//           <form
//             onSubmit={e => handleApplyFilter(e)}
//             title={"Form Filtro Gráfico"}
//             placeholder={"Form Filtro Gráfico"}
//           >
//             <div className="divFields">
//               <label>Data Início</label>

//               {graphiclOilUsed ? (
//                 <DateInput
//                   date={graphiclOilUsed.dateBegin}
//                   setDateValues={setGraphicOilUsed}
//                 ></DateInput>
//               ) : (
//                 <DateInput setDateValues={setNewDateBegin}></DateInput>
//               )}
//             </div>
//             <div className="divFields">
//               <label>Data Término</label>
//               {graphiclOilUsed ? (
//                 <DateInput
//                   date={graphiclOilUsed.dateEnd}
//                   setDateValues={setNewDateEnd}
//                 ></DateInput>
//               ) : (
//                 <DateInput setDateValues={setNewDateEnd}></DateInput>
//               )}
//             </div>

//             <div className="divFields">
//               <label>Selecione a Zona: </label>

//               {zonesWithoutFormat && (
//                 <ComboBoxMultiple
//                   comboBoxData={zonesWithoutFormat.data}
//                   comboBoxDefaultValues={graphiclOilUsed?.zones}
//                 ></ComboBoxMultiple>
//               )}
//             </div>
//             <div className="divFields">
//               {/* <button type={"submit"} disabled={formState.isSubmitting} onClick={toggle}> Aplicar</button> */}
//               <button type={"submit"}  > Aplicar</button>
//             </div>
//           </form>
//         </ContainerStyled>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// }
