import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: ${(props) => props.theme.sizes.header};
  width: 100vw;
  box-shadow: 0px 1px 5px 1px ${(props) => props.theme.colors.shadow};
`;
