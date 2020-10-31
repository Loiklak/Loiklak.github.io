import React from 'react';
import { useTranslation } from 'react-i18next';

import * as Styled from './styles';

interface PropsType {
  className?: string;
}

export const Navbar: React.FC<PropsType> = (props: PropsType) => {
  const { t } = useTranslation();

  return (
    <Styled.NavbarContainer className={props?.className}>
      <Styled.MenuItemsContainer>
        <Styled.MenuItem>{t('navbar.about')}</Styled.MenuItem>
        <Styled.MenuItem>{t('navbar.projects')}</Styled.MenuItem>
      </Styled.MenuItemsContainer>
    </Styled.NavbarContainer>
  );
};
