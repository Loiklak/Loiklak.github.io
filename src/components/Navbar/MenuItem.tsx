import React from 'react';

import * as Styled from './styles';

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
      offset={50}
      duration={500}
    >
      {props.children}
    </Styled.MenuItem>
  );
};
