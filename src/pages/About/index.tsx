import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Element as ScrollAnchor } from 'react-scroll';

import { routes } from '../../routes';
import { Text } from '../../components/Text';
import { ComputerAndMobilePicture } from '../../components/ComputerAndMobilePicture';
import { useOnScreen } from '../../hooks/useOnScreen';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();
  const aboutRef = useRef<HTMLDivElement>(null);

  const isOnScreen = useOnScreen(aboutRef, '-350px');

  return (
    <>
      <ScrollAnchor name={routes.about} />
      <Styled.AboutContainer ref={aboutRef} isOnScreen={isOnScreen}>
        <Styled.WhatIDoPictureContainer>
          <Styled.SquareBehindPic></Styled.SquareBehindPic>
          <ComputerAndMobilePicture />
        </Styled.WhatIDoPictureContainer>
        <Styled.TextContainer>
          <Styled.TextBlock>
            <Text>{t('about.myDriveBeginning')} </Text>
            <Text color="primary">{t('about.faster')}</Text>
            <Text> {t('about.and')} </Text>
            <Text color="primary">{t('about.easier')}</Text>
          </Styled.TextBlock>
          <Styled.TextBlock>
            <Text>{t('about.gamingLedTo')} </Text>
            <Text color="secondaryDark">{t('about.softwareEngineering')}</Text>
          </Styled.TextBlock>
        </Styled.TextContainer>
      </Styled.AboutContainer>
    </>
  );
};
