import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

export const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Styled.AboutContainer>
      <Styled.TextContainer>{t('about.welcome')}</Styled.TextContainer>
      <Styled.PictureContainer></Styled.PictureContainer>
    </Styled.AboutContainer>
  );
};
