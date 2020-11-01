import React from 'react';
import { useTranslation } from 'react-i18next';

import { Text } from '../../components/Text';

import * as Styled from './styles';

export const Intro: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutContainer>
      <Styled.TextContainer>
        <Styled.WelcomeText>{t('intro.welcome')}</Styled.WelcomeText>
        <Styled.AboutDescription>
          <Styled.TextBlock>
            <Text>{t('intro.iAm')}</Text>
            <Text color="secondaryDark">{t('intro.LoicChau')}</Text>
          </Styled.TextBlock>
        </Styled.AboutDescription>
        <a href="LoicChauCv.pdf">DOWNLOAD CV</a>
      </Styled.TextContainer>
      <Styled.PictureContainer>
        <Styled.AnimatedDot dotRadius="400px">
          <Styled.AnimatedPicture />
        </Styled.AnimatedDot>
      </Styled.PictureContainer>
    </Styled.AboutContainer>
  );
};
