import React from 'react';

import * as Styled from './styles';
import { theme } from '../../Theme';

interface PropsType {
  className?: string;
  to: string;
  children: React.ReactNode;
  order: number;
}

export const MenuItem: React.FC<PropsType> = (props: PropsType) => {
  return (
    <Styled.MenuItem
      order={props.order}
      to={props.to}
      spy={true}
      smooth={true}
      offset={-theme.sizes.header}
      duration={500}
    >
      {props.children}
    </Styled.MenuItem>
  );
};
