import styled from 'styled-components';

import * as animations from './animations';

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
  font-size: 8em;
  color: white;
  z-index: 2;
  animation: ${animations.FadeIn} 2s;
  animation-fill-mode: forwards;
  animation-delay: 2.7s;
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

export const Dot = styled.span`
  height: min(110vw, 110vh);
  width: min(110vw, 110vh);
  background-color: #e6ac00;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;
  animation-fill-mode: forwards;
  animation: ${animations.DotGrow} 1s ease-in-out;
`;

export const ImgInCircle = styled.img`
  max-height: 100%;
  max-width: 100%;
  min-height: 80vh;
  animation: ${animations.FadeIn} 2s linear;
  animation-delay: 0.9s;
  animation-fill-mode: forwards;
  opacity: 0;
  position: relative;
  right: 10vw;
`;
