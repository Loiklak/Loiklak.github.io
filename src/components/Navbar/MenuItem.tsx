import React from 'react';

import * as Styled from './styles';
import { theme } from '../../Theme';

interface PropsType {
  className?: string;
  to: string;
  children: React.ReactNode;
}

export const MenuItem: React.FC<PropsType> = (props: PropsType) => {
  return (
    <Styled.MenuItem
      to={props.to}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {props.children}
    </Styled.MenuItem>
  );
};
