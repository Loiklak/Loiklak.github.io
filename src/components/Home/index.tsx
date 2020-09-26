import React from 'react';
import * as Styled from './styles';
import animeGirlPic from '../../assets/images/AnimeGirl.png';

const Home = () => {
  return (
    <Styled.Container>
      <Styled.DotContainer>
        <Styled.Dot>
          <Styled.ImgInCircle src={animeGirlPic} />
        </Styled.Dot>
      </Styled.DotContainer>
      <Styled.TextContainer>
        <div />
        <Styled.BigText>Craftsman.</Styled.BigText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Home;
