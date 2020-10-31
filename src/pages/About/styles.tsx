import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100vh;
`;

export const TextContainer = styled.div`
  flex: 2 1 400px;
`;

export const WelcomeText = styled.div`
  font-size: ${(props) => props.theme.fontSize.headline};
  text-align: center;
  margin: 50px;
`;

export const AboutDescription = styled.div`
  font-size: ${(props) => props.theme.fontSize.medium};
  text-align: center;
`;

export const PictureContainer = styled.div`
  flex: 1 1 400px;
  background-color: blue;
`;
