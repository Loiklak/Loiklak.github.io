import styled from 'styled-components';

export const AboutContainer = styled.div<{ isOnScreen: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: auto;
  margin-bottom: 500px;
  ${(props) => !props.isOnScreen && 'visibility: hidden;'}
`;

export const TextContainer = styled.div`
  flex: 0 1 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
`;

export const TextBlock = styled.div`
  margin-bottom: 20px;
  font-size: ${(props) => props.theme.fontSize.large};
`;

export const WhatIDoPictureContainer = styled.div`
  flex: 0 1 500px;
  display: flex;
  justify-content: center;
  width: 500px;
  &: after;
  margin: 50px;
  position: relative;
`;

export const SquareBehindPic = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 330px;
  width: 500px;
  position: absolute;
  top: -20px;
  left: -20px;
  z-index: -10;
`;
