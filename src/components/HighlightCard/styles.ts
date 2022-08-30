import styled, { css } from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface IIconProps {
  type: "up" | "down" | "total";
}

interface IContainerPros extends IIconProps {}

interface IDefaultTextPros extends IIconProps {}

type Icon = {
  up: "success";
  down: "attention";
  total: "shape";
};

const iconTypes: Icon = {
  up: "success",
  down: "attention",
  total: "shape",
};

export const Container = styled.View<IContainerPros>`
  margin-right: ${RFValue(16)}px;
  /* width: ${RFValue(300)}px; */
  width: ${RFPercentage(40)}px;
  background-color: ${({ theme, type }) =>
    type === "total" ? theme.colors.secondary : theme.colors.shape};
  border-radius: 5px;
  padding: ${RFValue(19)}px ${RFValue(23)}px ${RFValue(42)}px;
  align-self: flex-start;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const DefaultText = styled.Text<IDefaultTextPros>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
  line-height: ${RFValue(21)}px;
`;

export const Title = styled(DefaultText)`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
`;

export const Icon = styled(Feather)<IIconProps>`
  font-size: ${RFValue(40)}px;
  color: ${({ theme, type }) => theme.colors[iconTypes[type]]};

  /* ${(props) =>
    props.type === "up" &&
    css`
      color: ${({ theme }) => theme.colors.success};
    `};
  ${(props) =>
    props.type === "down" &&
    css`
      color: ${({ theme }) => theme.colors.attention};
    `};
  ${(props) =>
    props.type === "total" &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}; */
`;

export const Footer = styled.View`
  margin-top: ${RFValue(35)}px;
`;

export const Amount = styled(DefaultText)`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  line-height: ${RFValue(48)}px;
`;

export const LastTransaction = styled(DefaultText)`
  color: ${({ theme, type }) =>
    type === "total" ? theme.colors.shape : theme.colors.title};
  font-size: ${RFValue(12)}px;
  line-height: ${RFValue(18)}px;
`;
