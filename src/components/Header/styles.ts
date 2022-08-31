import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${RFValue(113)}px;
  
  background-color: ${({ theme }) => theme.colors.primary};
  
  align-items: center;
  justify-content: flex-end;
  
  padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
