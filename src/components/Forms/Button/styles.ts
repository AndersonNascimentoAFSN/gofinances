import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${RFValue(16)}px;
  border-radius: 5px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: ${RFValue(21)}px;
`;
