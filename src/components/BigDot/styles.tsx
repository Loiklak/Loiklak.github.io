import styled from 'styled-components';

interface StyledProps {
  dotRadius: string;
}

export const Dot = styled.span<StyledProps>`
  height: ${(props) => props.dotRadius};
  width: ${(props) => props.dotRadius};
  background-color: ${(props) => props.theme.colors.primaryLight};
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  animation-fill-mode: forwards;
`;
