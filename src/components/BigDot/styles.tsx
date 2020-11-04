import styled from 'styled-components';

interface StyledProps {
  dotRadius: string;
}

export const Dot = styled.span<StyledProps>`
  height: 80vw;
  max-height: ${(props) => props.dotRadius};
  width: 80vw;
  max-width: ${(props) => props.dotRadius};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  animation-fill-mode: forwards;
`;
