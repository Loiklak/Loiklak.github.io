import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../components/Text';
import { ComputerAndMobilePicture } from '../../components/ComputerAndMobilePicture';

import * as Styled from './styles';

export const Intro: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Styled.AboutContainer>
        <Styled.TextContainer>
          <Styled.WelcomeText>{t('intro.welcome')}</Styled.WelcomeText>
          <Styled.AboutDescription>
            <Styled.TextBlock>
              <Text>{t('intro.iAm')}</Text>
              <Text color="secondaryDark">{t('intro.LoicChau')}</Text>
            </Styled.TextBlock>
            <Styled.TextBlock>
              <Text>{t('intro.myDriveBeginning')} </Text>
              <Text color="primary">{t('intro.faster')}</Text>
              <Text> {t('intro.and')} </Text>
              <Text color="primary">{t('intro.easier')}</Text>
            </Styled.TextBlock>
            <Styled.TextBlock>
              <Text>{t('intro.gamingLedTo')} </Text>
              <Text color="secondaryDark">
                {t('intro.softwareEngineering')}
              </Text>
            </Styled.TextBlock>
          </Styled.AboutDescription>
        </Styled.TextContainer>
        <Styled.PictureContainer>
          <Styled.AnimatedDot dotRadius="400px">
            <Styled.AnimatedPicture />
          </Styled.AnimatedDot>
        </Styled.PictureContainer>
      </Styled.AboutContainer>
      <Styled.AboutContainer>
        <Styled.WhatIDoPictureContainer>
          <ComputerAndMobilePicture />
        </Styled.WhatIDoPictureContainer>
        <Styled.TextContainer>Hola</Styled.TextContainer>
      </Styled.AboutContainer>
    </>
  );
};
