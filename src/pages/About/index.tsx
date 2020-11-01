import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../components/Text';
import { ComputerAndMobilePicture } from '../../components/ComputerAndMobilePicture';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Styled.AboutContainer>
        <Styled.WhatIDoPictureContainer>
          <Styled.SquareBehindPic></Styled.SquareBehindPic>
          <ComputerAndMobilePicture />
        </Styled.WhatIDoPictureContainer>
        <Styled.TextContainer>
          <Styled.TextBlock>
            <Text>{t('intro.myDriveBeginning')} </Text>
            <Text color="primary">{t('intro.faster')}</Text>
            <Text> {t('intro.and')} </Text>
            <Text color="primary">{t('intro.easier')}</Text>
          </Styled.TextBlock>
          <Styled.TextBlock>
            <Text>{t('intro.gamingLedTo')} </Text>
            <Text color="secondaryDark">{t('intro.softwareEngineering')}</Text>
          </Styled.TextBlock>
        </Styled.TextContainer>
      </Styled.AboutContainer>
    </>
  );
};
