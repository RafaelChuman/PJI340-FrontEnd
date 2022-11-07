import { api } from "@/services/api";
import { ERs } from "@/services/hooks/useERs";
import { LubrificationSystems } from "@/services/hooks/useLubrificationSystems";
import { queryClient } from "@/services/queryClient";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useParams } from "react-router-dom";
import LubrificationSystemsComponent from "../lubrificationSystem";
import { Container } from "./ers.styled";

export default function EditERsComponent(er: ERs) {
  return (
    <Container>
      <div>
        <div>
          <label>{er.number}</label>
        </div>
        <div>
          <label>{er.zone.name}</label>
        </div>
      </div>
      <div>
        <LubrificationSystemsComponent
          createdAt={er.createdAt}
          id={er.id}
          number={er.number}
          zone={er.zone}
        />
      </div>
    </Container>
  );
}
