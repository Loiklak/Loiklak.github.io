import styled from 'styled-components';

import { createCSSAnimation } from '../../Animations/animationScheduler';
import { FadeIn, DotGrow } from '../../Animations/keyframes';

import { MyPicture } from '../../components/MyPicture';
import { BigDot } from '../../components/BigDot';

import { circleAnimationMap, textAnimationMap, elements } from './animations';

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

export const TextContainer = styled.div`
  flex: 2 1 400px;
`;

export const WelcomeText = styled.div`
  font-size: ${(props) => props.theme.fontSize.headline};
  text-align: center;
  margin: 50px;
  opacity: 0;
  ${createCSSAnimation(FadeIn, elements.HEADLINE, textAnimationMap)}
`;

export const AboutDescription = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  text-align: center;
  opacity: 0;
  ${createCSSAnimation(FadeIn, elements.DESCRIPTION, textAnimationMap)}
`;

export const PictureContainer = styled.div`
  flex: 1 1 400px;
  display: flex;
  justify-content: center;
`;

export const AnimatedPicture = styled(MyPicture)`
  opacity: 0;
  ${createCSSAnimation(FadeIn, elements.PICTURE, circleAnimationMap)}
`;

export const AnimatedDot = styled(BigDot)`
  transform: scale(0);
  ${createCSSAnimation(DotGrow, elements.CIRCLE, circleAnimationMap)};
`;
