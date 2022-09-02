import React from "react";
import { TextInputProps } from "react-native";
import {
  Control,
  /* Controller, */ useController,
  FieldErrorsImpl,
} from "react-hook-form";

import { Input } from "../Input";

import { Container, Error } from "./styles";

interface IInputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: FieldErrorsImpl<{ [x: string]: any; }>;
}

export function InputForm({ control, name, error, ...rest }: IInputFormProps) {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: "",
  });

  return (
    <Container>
      <Input onChangeText={onChange} value={value} {...rest} />

      {error[name] && <Error>{error[name]?.message}</Error>}
    </Container>
  );
}

// export function InputForm({ control, name, ...rest }: IInputFormProps) {
//   return (
//     <Container>
//       <Controller
//         control={control}
//         render={({ field: { onChange, value } }) => (
//           <Input onChangeText={onChange} value={value} {...rest} />
//         )}
//         defaultValue=""
//         name={name}
//       />
//     </Container>
//   );
// }
