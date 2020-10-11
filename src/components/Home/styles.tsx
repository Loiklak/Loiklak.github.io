import styled from 'styled-components';
import img from '../../assets/images/LoicNoBg.png';

import {
  DotGrow,
  FadeIn,
  AnimatedElements,
  formatAnimation,
} from './animations';

/**
 * Components
 */

export const Container = styled.div`
  background-color: black;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
`;

export const BigText = styled.span`
  font-size: ${(props) => props.theme.fontSize.headline};
  color: white;
  z-index: 2;
  ${formatAnimation(FadeIn, AnimatedElements.BIG_TEXT, 'linear')}
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
  right: -20vw;
`;

export const DotContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

const dotRadius = 'min(100vw, 110vh)';

export const Dot = styled.span`
  height: ${dotRadius};
  width: ${dotRadius};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  ${formatAnimation(DotGrow, AnimatedElements.BIG_DOT, 'ease-in-out')}
  animation-fill-mode: forwards;
`;

export const ImgInCircle = styled.div`
  height: 90%;
  width: 90%;
  ${formatAnimation(FadeIn, AnimatedElements.BIG_PIC_ME, 'linear')}
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
  background-image: url(${img});
  background-size: 100%;
  background-position-x: -8vw;
`;
