import styled from 'styled-components';

export const NavbarContainer = styled.div`
  height: ${(props) => props.theme.sizes.header};
  width: 100%;
  box-shadow: 0px 1px 5px 1px ${(props) => props.theme.colors.shadow};
  display: flex;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

export const MenuItem = styled.span`
  margin: 0 30px;
  font-size: ${(props) => props.theme.fontSize.medium};
`;
