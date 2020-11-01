import styled, { DefaultTheme } from 'styled-components';

interface StyledProps {
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSize'];
}

export const Text = styled.span<StyledProps>`
  ${(props) => props.color && `color: ${props.theme.colors[props.color]};`}
  ${(props) => props.size && `font-size: ${props.theme.fontSize[props.size]};}`}
`;
