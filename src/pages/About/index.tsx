import React from 'react';
import { Element as ScrollAnchor } from 'react-scroll';
import { useTranslation } from 'react-i18next';

import { Text } from '../../components/Text';
import Image from '../../assets/images/MacbookAirOnCouch.jpg';
import { routes } from '../../routes';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollAnchor name={routes.about} />
      <Styled.AboutContainer>
        <Styled.ImageContainer>
          <Styled.Illustration src={Image} alt="Computer with code" />
        </Styled.ImageContainer>
        <Styled.AboutMe>
          <Styled.SectionHeader size="headline">About me</Styled.SectionHeader>
          <Text size="medium">
            <p>{t('about.part1')}</p>
            <p>{t('about.part2')}</p>
            <p>{t('about.part3')}</p>
          </Text>
        </Styled.AboutMe>
      </Styled.AboutContainer>
    </>
  );
};

/*
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
            <Text>{t('about.faster')}</Text>
            <Text> {t('about.and')} </Text>
            <Text>{t('about.easier')}</Text>
          </Styled.TextBlock>
          <Styled.TextBlock>
            <Text>{t('about.gamingLedTo')} </Text>
            <Text>{t('about.softwareEngineering')}</Text>
          </Styled.TextBlock>
        </Styled.TextContainer>
      </Styled.AboutContainer>
    </>
  );
};
*/
