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
  animation-delay: 4s;
  opacity: 0;
`;

export const DotContainer = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
`;

export const Dot = styled.span`
  height: min(100vw, 100vh);
  width: min(100vw, 100vh);
  background-color: #4f0099;
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;
  animation-fill-mode: forwards;
  animation: ${animations.DotGrow('min(100vw, 100vh)')} 1.5s ease-in-out;
`;

export const ImgInCircle = styled.img`
  max-height: 100%;
  max-width: 100%;
  animation: ${animations.FadeIn} 2s linear;
  animation-delay: 2s;
  animation-fill-mode: forwards;
  opacity: 0;
`;
