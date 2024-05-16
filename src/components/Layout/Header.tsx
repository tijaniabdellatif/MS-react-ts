import { Logo } from 'components/ui/Logo';
import React from 'react';
import styled from 'styled-components';

export const StyledHeader = styled.div``;

export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  );
};
