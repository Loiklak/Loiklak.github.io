import styled from 'styled-components';

import {
  DotGrow,
  FadeIn,
  AnimatedElements,
  animationMapping,
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
  animation: ${FadeIn}
    ${animationMapping[AnimatedElements.BIG_TEXT].animationDuration};
  animation-fill-mode: forwards;
  animation-delay: ${animationMapping[AnimatedElements.BIG_TEXT]
    .animationDelay};
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

const dotRadius = 'min(110vw, 110vh)';

export const Dot = styled.span`
  height: ${dotRadius};
  width: ${dotRadius};
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  animation-fill-mode: forwards;
  animation: ${DotGrow}
    ${animationMapping[AnimatedElements.BIG_DOT].animationDuration} ease-in-out;
`;

export const ImgInCircle = styled.img`
  max-height: 100%;
  max-width: 100%;
  animation: ${FadeIn}
    ${animationMapping[AnimatedElements.BIG_PIC_ME].animationDuration} linear;
  animation-delay: ${animationMapping[AnimatedElements.BIG_PIC_ME]
    .animationDelay};
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
  right: 10vw;
`;
