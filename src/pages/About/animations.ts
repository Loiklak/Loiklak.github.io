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

const AboutElementsToAnimate: AnimationDescription[] = [
  { name: elements.HEADLINE, duration: 0.5 },
  { name: elements.DESCRIPTION, duration: 0.2 },
  { name: elements.CIRCLE, duration: 1 },
  { name: elements.PICTURE, duration: 1 },
];

export const animationMap = createAnimationMap(AboutElementsToAnimate);
