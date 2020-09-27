import { keyframes } from 'styled-components';

/**
 * Keyframes
 */

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
 * Gradually appears while translating downwards
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
 * Animations timing
 */

/** Names of the elements we want to animate */
export enum AnimatedElements {
  BIG_DOT = 'bigDot',
  BIG_PIC_ME = 'bigPicMe',
  BIG_TEXT = 'bigText',
}

interface AnimationDescription {
  name: AnimatedElements;
  /** duration of the animation in seconds */
  duration: number;
}

/** Animations and their duration ordered */
const animationOrder: AnimationDescription[] = [
  {
    name: AnimatedElements.BIG_DOT,
    duration: 1,
  },
  {
    name: AnimatedElements.BIG_PIC_ME,
    duration: 2,
  },
  {
    name: AnimatedElements.BIG_TEXT,
    duration: 2,
  },
];

interface AnimationMappingElement {
  animationDuration: string;
  animationDelay: string;
}
interface AnimationMapping {
  [animatedElement: string]: AnimationMappingElement;
}

/* Computes the delay for the animations in order to make them appear one by one */
export const { animationMapping } = animationOrder.reduce<{
  totalAnimationDuration: number;
  animationMapping: AnimationMapping;
}>(
  (accumulator, currentAnimation) => ({
    totalAnimationDuration:
      accumulator.totalAnimationDuration + currentAnimation.duration,
    animationMapping: {
      ...accumulator.animationMapping,
      [currentAnimation.name]: {
        animationDuration: `${currentAnimation.duration}s`,
        animationDelay: `${accumulator.totalAnimationDuration}s`,
      },
    },
  }),
  {
    totalAnimationDuration: 0,
    animationMapping: {},
  }
);

console.log(animationMapping);
