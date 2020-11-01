import {
  AnimationDescription,
  createAnimationMap,
} from '../../Animations/animationScheduler';

export const elements = {
  HEADLINE: 'headline',
  DESCRIPTION: 'description',
  CIRCLE: 'circle',
  PICTURE: 'picture',
};

const textElementsToAnimate: AnimationDescription[] = [
  { name: elements.HEADLINE, duration: 0.8 },
  { name: elements.DESCRIPTION, duration: 0.8 },
];

const circleElementsToAnimate: AnimationDescription[] = [
  { name: elements.CIRCLE, duration: 0.8 },
  { name: elements.PICTURE, duration: 0.8 },
];

export const textAnimationMap = createAnimationMap(textElementsToAnimate);

export const circleAnimationMap = createAnimationMap(circleElementsToAnimate);
