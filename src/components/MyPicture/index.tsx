import React from 'react';

import * as Styled from './styles';

interface PropsType {
  className?: string;
}

export const MyPicture: React.FC<PropsType> = (props: PropsType) => {
  return <Styled.PictureOfMine className={props?.className} />;
};
