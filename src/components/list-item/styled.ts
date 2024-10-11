import styled from "styled-components/native";
import { theme } from "../../theme";

export const Container = styled.View`
  width: 100%;
  min-height: 64px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-color: ${theme.COLORS.GRAY_400};
  border-width: 1px;
  border-radius: ${theme.BORDER.MD}px;
  background-color: ${theme.COLORS.GRAY_500};
  padding: 12px;
  gap: 8px;
`;

export const Text = styled.Text<{ isChecked: boolean }>`
  flex: 1;
  flex-wrap: "wrap";
  font-size: ${theme.FONT_SIZE.MD}px;
  color: ${({ isChecked }) =>
    isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
  font-family: ${theme.FONT_FAMILY.REGULAR};
  text-decoration-line: ${({ isChecked }) =>
    isChecked ? "line-through" : "none"};
`;
