import React from 'react';
import { DefaultTheme } from 'styled-components';

import * as Styled from './styles';

interface PropsType {
  className?: string;
  color?: keyof DefaultTheme['colors'];
  size?: keyof DefaultTheme['fontSize'];
  children: React.ReactNode | React.ReactNode[];
}

export const Text: React.FC<PropsType> = ({
  className,
  color = 'text',
  size = 'small',
  children,
}: PropsType) => {
  return (
    <Styled.Text color={color} size={size} className={className}>
      {children}
    </Styled.Text>
  );
};
