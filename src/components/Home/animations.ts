import { keyframes } from 'styled-components';

/**
 * Keyframes
 */

/**
 * Make dot grow form radius=0 to specified radius
 */
export const DotGrow = (radius: string) => keyframes`
  0% {
    height: 0;
    width: 0;
  } 
  100% {
    height: ${radius};
    width: ${radius};
  }
`;

/**
 * Gradually appears while translating downwards
 */
export const FadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(0, -20px)
  } 
  to {
    opacity: 1;
  }
`;
