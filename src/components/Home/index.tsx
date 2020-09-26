import React from 'react';
import * as Styled from './styles';
import Pic from '../../assets/images/LoicNoBg.png';

const Home = () => {
  return (
    <Styled.Container>
      <Styled.DotContainer>
        <Styled.Dot>
          <Styled.ImgInCircle src={Pic} />
        </Styled.Dot>
      </Styled.DotContainer>
      <Styled.TextContainer>
        <Styled.BigText>Craftsman.</Styled.BigText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Home;
