import React from 'react';
import * as Styled from './styles';

const Home: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.DotContainer>
        <Styled.Dot>
          <Styled.ImgInCircle />
        </Styled.Dot>
      </Styled.DotContainer>
      <Styled.TextContainer>
        <Styled.BigText>Craftsman.</Styled.BigText>
      </Styled.TextContainer>
    </Styled.Container>
  );
};

export default Home;
