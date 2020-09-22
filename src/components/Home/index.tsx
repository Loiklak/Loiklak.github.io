import React from 'react';
import * as Styled from './styles';

const Home = () => {
  return (
    <Styled.Container>
      <Styled.DotContainer>
        <Styled.Dot />
      </Styled.DotContainer>
      <Styled.TextContainer>
        <Styled.BigText>Hello World</Styled.BigText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Home;
