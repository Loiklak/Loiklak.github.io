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
          <Styled.Hey>
            <Text size="large">{t('about.iAm')}</Text>
            <Text color="secondaryDark" size="large">
              {t('about.LoicChau')}
            </Text>
          </Styled.Hey>
          <div>
            <Text size="large">{t('about.myDriveBeginning')} </Text>
            <Text size="large" color="primary">
              {t('about.faster')}
            </Text>
            <Text size="large"> {t('about.and')} </Text>
            <Text size="large" color="primary">
              {t('about.easier')}
            </Text>
          </div>
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
