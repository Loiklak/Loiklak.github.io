import styled from 'styled-components';

export const Container = styled.div`
  background-color: black;
`;

export const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 100vh;
`;

export const BigText = styled.p`
  font-size: 8em;
  color: white;
  z-index: 2;
`;

export const DotContainer = styled.div`
  position: fixed;
  display: grid;
  place-items: center;
  width: 100vw;
  height: 98vh;
  overflow: hidden;
  z-index: 1;
`;

export const Dot = styled.span`
  height: min(110vw, 110vh);
  width: min(110vw, 110vh);
  background-color: #4f0099;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  top: -2vh;
  overflow: hidden;
`;

export const ImgInCircle = styled.img`
  max-height: 100%;
  max-width: 100%;
`;
