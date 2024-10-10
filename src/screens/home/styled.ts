import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { theme } from "../../theme";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

export const Header = styled.View`
  height: 173px;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 110px;
  height: 32px;
`;

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: -50px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 54px;
  background-color: ${theme.COLORS.GRAY_500};
  border: 1px solid ${theme.COLORS.GRAY_700};
  padding: 16px;
  border-radius: ${theme.BORDER.SM}px;
  color: ${theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.MD}px;
`;

export const AddButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  background-color: ${theme.COLORS.BLUE_DARK};
  justify-content: center;
  align-items: center;
  border-radius: ${theme.BORDER.SM}px;
`;
