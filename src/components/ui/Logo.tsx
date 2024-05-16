import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

export const Logo: React.FC = () => {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="logo" />
    </StyledLogo>
  );
};
