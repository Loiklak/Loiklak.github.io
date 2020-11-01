import React from 'react';

import img from '../../assets/images/ComputerAndMobile.jpg';

import * as Styled from './styles';

interface PropsType {
  className?: string;
}

export const ComputerAndMobilePicture: React.FC<PropsType> = (
  props: PropsType
) => {
  return <Styled.Image className={props.className} src={img} />;
};
