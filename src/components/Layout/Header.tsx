import { Logo } from 'components/ui/Logo';
import React from 'react';
import styled from 'styled-components';
export const StyledHeader = styled.div`
  width: 250px;
`;
export const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo image="/logo.png" />
    </StyledHeader>
  );
};
