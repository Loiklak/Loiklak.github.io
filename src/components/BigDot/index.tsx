import React from 'react';

import * as Styled from './styles';

interface PropsType {
  className?: string;
  children?: React.ReactNode;
  dotRadius: string;
}

export const BigDot: React.FC<PropsType> = (props: PropsType) => {
  return (
    <Styled.Dot className={props?.className} dotRadius={props.dotRadius}>
      {props.children}
    </Styled.Dot>
  );
};
