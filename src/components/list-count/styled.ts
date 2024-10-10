import styled from "styled-components/native";
import { theme } from "../../theme";

export const ListCountContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const ListCountNumberContainer = styled.View`
  background-color: ${theme.COLORS.GRAY_400};
  padding: 2px 8px;
  border-radius: ${theme.BORDER.LG}px;
`;

export const ListCountText = styled.Text<{ color: string }>`
  color: ${({ color }) => color};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM}px;
`;

export const ListCountNumberText = styled.Text`
  color: ${theme.COLORS.GRAY_200};
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.XS}px;
`;
