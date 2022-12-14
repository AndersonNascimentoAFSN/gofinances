import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Container, Category, Icon } from "./styles";

interface ICategorySelectProps extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: ICategorySelectProps) {
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
