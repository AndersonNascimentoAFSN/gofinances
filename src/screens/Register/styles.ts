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

export const Fields = styled.View``;
