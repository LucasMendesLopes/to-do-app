import styled from "styled-components/native";
import { theme } from "../../theme";
import { MotiSafeAreaView } from "moti";

export const Container = styled(MotiSafeAreaView)`
  flex: 1;
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

export const InputContainer = styled.View`
  position: absolute;
  top: 142px;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  z-index: 1;
  padding: 0 20px;
`;

export const Input = styled.TextInput<{ focus: boolean }>`
  flex: 1;
  height: 54px;
  background-color: ${theme.COLORS.GRAY_500};
  border: 1px solid
    ${({ focus }) => (focus ? theme.COLORS.PURPLE_DARK : theme.COLORS.GRAY_700)};
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

export const ListContainer = styled.View`
  flex: 1;
  background-color: ${theme.COLORS.GRAY_600};
  padding: 59px 24px 0px;
`;

export const ListHeaderContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
`;
