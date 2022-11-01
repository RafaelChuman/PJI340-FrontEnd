import React, { ChangeEvent, ChangeEventHandler, forwardRef, ForwardRefRenderFunction, SelectHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

import styles from "./combobox.module.css";
import { RiArrowDownLine, RiCheckLine } from "react-icons/ri";

export interface Options {
  id: string;
  value: string;
}

interface ComboBoxProps {
  title: string;
  comboboxData: Options[] | undefined;
  handleClick: (newValue: any) => void;
}


function handleChange(event: ChangeEvent<HTMLSelectElement>, { handleClick, comboboxData }:ComboBoxProps) {
  console.log(event.target.value);

  const value = comboboxData?.find((data) => data.id === event.target.value);
  
  console.log(value);

  handleClick(value);
}

const comboBox: ForwardRefRenderFunction<HTMLSelectElement, ComboBoxProps> = (
  { title, handleClick, comboboxData, ...rest }:ComboBoxProps,
  ref
) => {
  return (
    <select ref={ref} title={title} {...rest} onChange={(e)=>handleChange(e, {title, handleClick, comboboxData})}>
      {comboboxData?.map((combData) => {
        return (
          <option
            key={combData.id}
            onMouseEnter={()=>console.log("Click")}
            value={combData.id}
          >
            {combData.value}
          </option>
        );
      })}
    </select>
  );
};

export const ComboBox = forwardRef(comboBox);

// () => {
//   console.log("Click");
//   console.log(combData);
//   handleClick(combData);
// }


// return (
//   <Menu>
//     <MenuButton
//       as={Select}
//       border={"1px"}
//       borderColor={"pink.500"}
//       borderRadius="8px"
//       _hover={{
//         background: "gray.800",
//         color: "gray.200",
//       }}
//       _active={{
//         background: "gray.800",
//         color: "gray.200",
//       }}
//       placeholder={comboboxData?.find((x) => x.id === value)?.value ||
//         placeHolder ||
//         "Selecione uma Opção..."}
//       height={"3rem"}
//       bg={"gray.800"}
//       color="gray.50"
//       w="100%"
//     >

//     </MenuButton>
//     <MenuList
//       w="100%"
//       minWidth={"400px"}
//       alignContent="center"
//       alignItems={"center"}
//       background={"gray.600"}
//       backgroundColor={"gray.600"}
//       border={"1px"}
//       borderColor={"pink.500"}
//     >
//       {comboboxData ? (
//         comboboxData.map((data) => {
//           return (
//             <MenuItem
//               width={"100%"}
//               background={"gray.600"}
//               backgroundColor={"gray.600"}
//               color="gray.50"
//               _hover={{
//                 color: "gray.200",
//               }}
//               _focus={{
//                 color: "gray.200",
//               }}
//               onClick={() => handleClick(data.id)}
//               key={data.id}
//               icon={<RiCheckLine opacity={value === data.id ? 1 : 0} />}
//             >
//               {data.value}
//             </MenuItem>
//           );
//         })
//       ) : (
//         <></>
//       )}
//     </MenuList>
//   </Menu>
// );
