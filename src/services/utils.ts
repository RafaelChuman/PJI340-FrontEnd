import { dataOfChart } from "@/components/Charts";
import { Options } from "@/components/ComboBox";

interface dataToComboBox {
  id?: string;
  name: string;
}

interface dataToChart {
  count: number;
  date_trunc: Date;
}

export function FormatDataToCharts(allData: dataToChart[]): dataOfChart {
  if (allData) {
    let categories: string[] = [];
    let series: number[] = [];

    allData.forEach((data) => {
      categories.push(String(data.date_trunc));
      series.push(data.count);
    });

    if (categories.length && series.length) {
      return {
        categories: categories,
        series: series,
      };
    }
  }
  return {
    categories: [""],
    series: [0],
  };
}

export function FormatDataToCombobox(allData: dataToComboBox[]): Options[] {
  if (allData) {
    const formatedData = allData.map((data) => {
      return {
        id: data.id ? data.id : "",
        value: data.name,
      };
    });

    return formatedData;
  }
  return [
    {
      id: "",
      value: "",
    },
  ];
}

export function convertToDateBR(date: string | undefined) {
  let value = "";

  if (date) {
    if (date.length > 0) {

      value = new Date(date).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });
    }
  }

  return value;
}

export function convertToBRL(value: string | undefined) {
  let valor = 0;

  if (value === undefined || value === "") {
    valor = 0;
  } else {
    valor = parseInt(value);
  }

  const valueFormated = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(valor / 100);

  return valueFormated;
}

export function convertToWhatsAppMask(value: string | undefined) {
  let valueFormated = "";

  if (value?.length == 11) {
    valueFormated = `(${value.slice(0, 2)}) ${value.slice(2, 3)} ${value.slice(
      3,
      7
    )}-${value.slice(7, 11)}`;
  }

  return valueFormated;
}

export function returnPaginatedData<Type>(
  schema: Type[] | undefined,
  page: number,
  perPage: number
): Type[] | undefined {
  if (!schema) {
    return undefined;
  }
  const startPage = (page - 1) * perPage;
  const endPage = startPage + perPage;

  return schema.slice(startPage, endPage);
}

export async function checkBoxClickEvent(
  event: React.ChangeEvent<HTMLInputElement>,
  checkBoxValues: String[] | undefined,
  setCheckBoxValues: React.Dispatch<React.SetStateAction<String[] | undefined>>
) {
  const isCheked = event.target.checked;
  const checkBoxValue = event.target.id;

  if (isCheked) {
    let valueAlredyExists = undefined;

    if (checkBoxValues) {
      valueAlredyExists = checkBoxValues.find(
        (item: String) => item == checkBoxValue
      );

      if (valueAlredyExists == undefined) {
        setCheckBoxValues([...checkBoxValues, checkBoxValue]);
      }
    } else {
      setCheckBoxValues([checkBoxValue]);
    }
  } else {
    if (checkBoxValues) {
      const valueAlredyExists = checkBoxValues.findIndex(
        (item: String) => item == checkBoxValue
      );

      if (valueAlredyExists > -1) {
        checkBoxValues.splice(valueAlredyExists, 1);
      }
    }
  }
}
