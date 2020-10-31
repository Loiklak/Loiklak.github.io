import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

interface PropsType {
  className?: string;
}

export const Navbar: React.FC<PropsType> = (props: PropsType) => {
  const { t } = useTranslation();

  return (
    <Styled.NavbarContainer
      className={props?.className}
    ></Styled.NavbarContainer>
  );
};
