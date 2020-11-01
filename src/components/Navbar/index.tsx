import React from 'react';
import { useTranslation } from 'react-i18next';

import { routes } from '../../routes';

import { MenuItem } from './MenuItem';
import * as Styled from './styles';

interface PropsType {
  className?: string;
}

export const Navbar: React.FC<PropsType> = (props: PropsType) => {
  const { t } = useTranslation();

  return (
    <Styled.NavbarContainer className={props?.className}>
      <Styled.MenuItemsContainer>
        <MenuItem to={routes.resume}>{t('navbar.resume')}</MenuItem>
        <MenuItem to={routes.about}>{t('navbar.about')}</MenuItem>
        <MenuItem to={routes.about}>{t('navbar.projects')}</MenuItem>
      </Styled.MenuItemsContainer>
    </Styled.NavbarContainer>
  );
};
