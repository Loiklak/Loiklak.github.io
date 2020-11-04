import React from 'react';
import { Element as ScrollAnchor } from 'react-scroll';

import Image from '../../assets/images/MacbookAirOnCouch.jpg';

import { routes } from '../../routes';

export const About: React.FC = () => {
  return (
    <div style={{ padding: 16 }}>
      <ScrollAnchor name={routes.about} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div
          style={{ flex: '1 1 600px', display: 'flex', alignItems: 'center' }}
        >
          <img src={Image} style={{ height: 'auto', width: '100%' }} />
        </div>
        <div
          style={{
            flex: '1 1 600px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '32px',
          }}
        >
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna
            congue, lacinia nulla vitae, ultricies eros. Sed tristique vel ipsum
            in viverra. Maecenas interdum vel risus sed tristique. Cras cursus,
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id magna
            congue, lacinia nulla vitae, ultricies eros. Sed tristique vel ipsum
            in viverra. Maecenas interdum vel risus sed tristique. Cras cursus,
            ex id vestibulum consequat, quam nisi eleifend purus, in auctor
            nulla libero dictum urna. Curabitur efficitur quam tellus, vel
            semper erat aliquet eget. Nulla pellentesque tortor et enim
            interdum, id sollicitudin nulla euismod. Donec commodo, magna eget
            ornare lobortis, erat nisi ultrices sem, sed posuere neque leo eget
            orci. Curabitur convallis facilisis purus, pharetra pulvinar lorem
            fringilla at. Duis tincidunt sed tortor in pharetra. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut vitae arcu sodales,
            semper tellus id, tempus velit. Vivamus tempor in elit nec
            consequat. Duis eu ligula placerat, commodo turpis a, commodo justo.
            Donec ac ligula et nisl pharetra pretium. Vivamus ut pulvinar eros,
            ut suscipit felis. Praesent vitae nunc eget justo vehicula tincidunt
            vel ut risus. Maecenas ultricies cursus varius. Maecenas vel
            sagittis odio. Nam quis ante sapien. Cras laoreet molestie ligula
            nec porttitor. In non ligula et libero ullamcorper luctus. Duis
            condimentum ante eu tincidunt malesuada. Mauris pretium libero
            lacinia, vestibulum ligula mattis, egestas libero. Quisque imperdiet
            tempus tortor, sed imperdiet nunc ultricies at. Nulla dui enim,
            posuere sagittis vehicula eget, varius ac turpis. Ut a eleifend
            elit. Quisque lobortis diam sed elit commodo condimentum. Cras
            varius aliquet viverra. Quisque tristique nisl mauris, id ornare
            risus cursus vitae.
          </p>
        </div>
      </div>
    </div>
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
