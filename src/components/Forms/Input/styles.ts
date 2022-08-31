import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text,
}))`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  margin-bottom: ${RFValue(8)}px;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  border-radius: 5px;
`;
