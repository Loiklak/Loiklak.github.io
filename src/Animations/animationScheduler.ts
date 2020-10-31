import { Keyframes, css, FlattenSimpleInterpolation } from 'styled-components';

export enum AnimatedElements {
  BIG_DOT = 'bigDot',
  BIG_PIC_ME = 'bigPicMe',
  BIG_TEXT = 'bigText',
}

/** Infos on an element to animate */
interface AnimationDescription {
  name: AnimatedElements;
  /** duration of the animation in seconds */
  duration: number;
}

/** CSS animation properties */
interface AnimationProperties {
  animationDuration: string;
  animationDelay: string;
}

/** Array which maps an element name to an object with its CSS animation properties */
interface AnimationMap {
  [animatedElement: string]: AnimationProperties;
}

/**
 * Creates an object which will map objects to animate to their corresponding
 * CSS animation properties in order to make them appear one by one
 * @param animatedElements A sorted array of the elements we want to animate
 */
export function createAnimationMap(
  animatedElements: AnimationDescription[]
): AnimationMap {
  const { animationMapping } = animatedElements.reduce<{
    totalAnimationDuration: number;
    animationMapping: AnimationMap;
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

  return animationMapping;
}

/**
 * Animations helpers
 */

/**
 * Auto creates animation and animation delay for a given element and a given AnimationMap
 * @param animation Styled component animation keyframe
 * @param elementName Name of the element to animate
 * @param animationOptions Additional options for the animation besides keyframe and duration
 */
export function formatAnimation(
  animation: Keyframes,
  elementName: AnimatedElements,
  animationMapping: AnimationMap,
  animationOptions?: string
): FlattenSimpleInterpolation {
  return css`
    animation: ${animation} ${animationMapping[elementName].animationDuration}
      ${animationOptions};
    animation-delay: ${animationMapping[elementName].animationDelay};
  `;
}
