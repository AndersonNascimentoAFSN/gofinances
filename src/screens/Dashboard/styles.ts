import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: flex-start;
  flex-direction: row;
`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFValue(24)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
`;

export const UserContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UserPhoto = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const UserTextWrapper = styled.View`
  margin-left: 17px;
`;

export const UserTextDefault = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  line-height: ${RFValue(24)}px;
  font-smooth: antialiased;
`;

export const UserGreeting = styled(UserTextDefault)`
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const UserName = styled(UserTextDefault)`
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const IconFeather = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24, paddingRight: 8 },
})`
  margin-top: -${RFValue(150)}px;
`;
