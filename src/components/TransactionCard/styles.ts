import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const DefaultText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  line-height: ${RFValue(21)}px;
  font-size: ${RFValue(14)}px;
`;

export const Container = styled.View`
  padding: ${RFValue(12)}px ${RFValue(18)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: ${RFValue(16)}px;
`;

export const HeaderTransaction = styled.View`
  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled(DefaultText)`
  color: ${({ theme }) => theme.colors.title};
`;

interface IAmountProps {
  type: "positive" | "negative";
}

export const Amount = styled(DefaultText)<IAmountProps>`
  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
  line-height: ${RFValue(30)}px;
  font-size: ${RFValue(20)}px;
`;

export const TransactionFooter = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(12)}px;
  margin-right: ${RFValue(16)}px;
`;

export const CategoryName = styled(DefaultText)``;

export const TransactionDate = styled(DefaultText)``;
