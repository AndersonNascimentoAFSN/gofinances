import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface ITransactionTypeButton {
  type: "up" | "down";
}

interface IIconsTypeColors {
  up: "success";
  down: "attention";
}

interface IContainerProps extends ITransactionTypeButton {
  isActive: boolean;
}

const iconsTypeColors: IIconsTypeColors = {
  up: "success",
  down: "attention",
};

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: 49%;
  flex-direction: row;
  align-items: center;
  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text_opacity};
  border-radius: 5px;
  padding: ${RFValue(16)}px;

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}
`;

export const Icon = styled(Feather)<ITransactionTypeButton>`
  margin-right: ${RFValue(14)}px;
  font-size: ${RFValue(20)}px;

  color: ${({ theme, type }) => theme.colors[iconsTypeColors[type]]};
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  line-height: ${RFValue(21)}px;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
