import React from 'react';
import { useTranslation } from 'react-i18next';

import { MyPicture } from '../../components/MyPicture';
import { BigDot } from '../../components/BigDot';

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
        <BigDot dotRadius="400px">
          <MyPicture />
        </BigDot>
      </Styled.PictureContainer>
    </Styled.AboutContainer>
  );
};
