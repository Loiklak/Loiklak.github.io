import styled, { css } from 'styled-components';
import { Text } from '../../components/Text';
import { FadeIn, FadeOut } from '../../Animations/keyframes';

export const AboutContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const ImageContainer = styled.div`
  flex: 1 1 600px;
  display: flex;
  align-items: center;
`;

export const Illustration = styled.img`
  width: 100%;
`;

export const AboutMe = styled.div<{ isOnScreen: boolean }>`
  flex: 1 1 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 8%;
  box-sizing: border-box;
  opacity: 0;

  ${({ isOnScreen }) =>
    isOnScreen
      ? css`
          animation: ${FadeIn} 1s;
          animation-delay: 0.5s;
          animation-fill-mode: forwards;
        `
      : css`
          animation: ${FadeOut} 1s;
          animation-delay: 0s;
          animation-fill-mode: forwards;
        `};
`;

export const SectionHeader = styled(Text)`
  margin-bottom: 16px;
`;
