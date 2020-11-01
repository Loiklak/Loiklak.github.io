import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../components/Text';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutContainer>
      <Styled.TextContainer>
        <Styled.WelcomeText>{t('about.welcome')}</Styled.WelcomeText>
        <Styled.AboutDescription>
          <Styled.TextBlock>
            <Text>{t('about.iAm')}</Text>
            <Text color="secondaryDark">{t('about.LoicChau')}</Text>
          </Styled.TextBlock>
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
        </Styled.AboutDescription>
      </Styled.TextContainer>
      <Styled.PictureContainer>
        <Styled.AnimatedDot dotRadius="400px">
          <Styled.AnimatedPicture />
        </Styled.AnimatedDot>
      </Styled.PictureContainer>
    </Styled.AboutContainer>
  );
};
