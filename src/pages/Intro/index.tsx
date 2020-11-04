import React from 'react';
import { useTranslation } from 'react-i18next';
import { Element as ScrollAnchor } from 'react-scroll';

import { routes } from '../../routes';
import { Text } from '../../components/Text';

import * as Styled from './styles';

export const Intro: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <ScrollAnchor name={routes.resume} />
      <Styled.IntroContainer>
        <Styled.TextContainer>
          <Styled.WelcomeText>{t('intro.welcome')}</Styled.WelcomeText>
          <Styled.AboutDescription>
            <Styled.TextBlock>
              <Text>{t('intro.iAm')}</Text>
              <Text color="secondaryDark">{t('intro.LoicChau')}</Text>
            </Styled.TextBlock>
            <Styled.TextBlock>
              <Text>{t('intro.myGoal')}</Text>
            </Styled.TextBlock>
            <Styled.TextBlock>
              <Text>{t('intro.whatIAm')}</Text>
              <Text color="secondaryDark"> {t('intro.softwareEngineer')} </Text>
              <Text>{t('intro.wink')}</Text>
            </Styled.TextBlock>
          </Styled.AboutDescription>
          <Styled.DownloadCvLink href="LoicChauCv.pdf">
            <Text color="primary" size="small">
              {t('intro.downloadCv')}
            </Text>
          </Styled.DownloadCvLink>
        </Styled.TextContainer>
        <Styled.PictureContainer>
          <Styled.AnimatedDot dotRadius="600px">
            <Styled.AnimatedPicture />
          </Styled.AnimatedDot>
        </Styled.PictureContainer>
      </Styled.IntroContainer>
    </>
  );
};
