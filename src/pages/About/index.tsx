import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutContainer>
      <Styled.TextContainer>
        <Styled.WelcomeText>{t('about.welcome')}</Styled.WelcomeText>
        <Styled.AboutDescription>
          <div>{t('about.whoAmI')}</div>
          <div>{t('about.myDrive')}</div>
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
