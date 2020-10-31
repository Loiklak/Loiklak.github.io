import styled, { DefaultTheme } from 'styled-components';

interface StyledProps {
  color: keyof DefaultTheme['colors'];
  size: keyof DefaultTheme['fontSize'];
}

export const Text = styled.span<StyledProps>`
  color: ${(props) => props.theme.colors[props.color]};
  font-size: ${(props) => props.theme.fontSize[props.size]};
`;
