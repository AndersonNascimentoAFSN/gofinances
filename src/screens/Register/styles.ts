import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  padding: ${RFValue(24)}px ${RFValue(24)}px ${RFValue(16)}px;
`;

interface IFieldsProps {
  direction: "vertical" | "horizontal";
  mt: number;
}

export const Fields = styled.View<IFieldsProps>`
  flex-direction: ${({ direction }) =>
    direction === "horizontal" ? "row" : "column"};
  justify-content: space-between;
  margin-top: ${({mt}) => (mt && RFValue(mt))}px;
`;
