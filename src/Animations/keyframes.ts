import { keyframes } from 'styled-components';

/**
 * Make dot grow form radius=0 to specified radius
 */
export const DotGrow = keyframes`
  0% {
    transform: scale(0)
  } 
  100% {
    transform: scale(1)
  }
`;

/**
 * Gradually appears while translating upwards
 */
export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0, 20px)
  } 
  to {
    opacity: 1;
  }
`;

/**
 * Gradually disappears while translating downwards
 */
export const FadeOut = keyframes`
  from {
   opacity: 1;
  }
  to {
    opacity: 0;
    transform: translate(0, 20px);
  }
`;
