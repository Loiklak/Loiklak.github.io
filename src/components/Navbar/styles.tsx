import styled from 'styled-components';
import { Link } from 'react-scroll';

import { createCSSAnimation } from '../../Animations/animationScheduler';
import { FadeIn } from '../../Animations/keyframes';

import { animationMap } from './animations';

export const NavbarContainer = styled.div`
  height: ${(props) => props.theme.sizes.header}px;
  width: 100%;
  box-shadow: 0px 1px 5px 1px ${(props) => props.theme.colors.shadow};
  display: flex;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.background};
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (min-width: 600px) {
    margin-left: 100px;
  }
`;

export const MenuItem = styled(Link)<{ order: number }>`
  margin: 0 30px;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.fontSize.medium};
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }

  /* Improve blurry animation on Chrome */
  backface-visibility: hidden;
  -webkit-font-smoothing: subpixel-antialiased;

  opacity: 0;
  ${({ order }) => createCSSAnimation(FadeIn, `item${order}`, animationMap)}
`;
