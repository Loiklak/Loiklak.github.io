import styled from 'styled-components';

import { createCSSAnimation } from '../../Animations/animationScheduler';
import { FadeIn, DotGrow } from '../../Animations/keyframes';

import { MyPicture } from '../../components/MyPicture';
import { BigDot } from '../../components/BigDot';

import { circleAnimationMap, textAnimationMap, elements } from './animations';

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
`;

export const TextContainer = styled.div`
  flex: 0 1 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;

export const WelcomeText = styled.div`
  font-size: ${(props) => props.theme.fontSize.headline};
  text-align: center;
  margin: 50px;
  opacity: 0;
  ${createCSSAnimation(FadeIn, elements.HEADLINE, textAnimationMap)}
`;

export const AboutDescription = styled.div`
  font-size: ${(props) => props.theme.fontSize.large};
  text-align: center;
  opacity: 0;
  ${createCSSAnimation(FadeIn, elements.DESCRIPTION, textAnimationMap)}
`;

export const TextBlock = styled.div`
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const PictureContainer = styled.div`
  flex: 0 1 400px;
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
  margin: 10px;
`;

export const DownloadCvLink = styled.a`
  margin-top: 10px;
  border: solid ${(props) => props.theme.colors.primary};
  padding: 5px;
  text-decoration: none;
`;
