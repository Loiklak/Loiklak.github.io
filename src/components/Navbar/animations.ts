import {
  AnimationDescription,
  createAnimationMap,
} from '../../Animations/animationScheduler';

export const elements = {
  ITEM1: 'item1',
  ITEM2: 'item2',
};

const elementsToAnimate: AnimationDescription[] = [
  { name: 'delay', duration: 0.4 },
  { name: elements.ITEM1, duration: 0.4 },
  { name: elements.ITEM2, duration: 0.4 },
];

export const animationMap = createAnimationMap(elementsToAnimate);
