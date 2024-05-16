import React from 'react';
import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;

type ILogo = {
  image: string;
};

export const Logo: React.FC<ILogo> = ({ image }) => {
  return (
    <StyledLogo>
      <Img src={image} alt="logo" />
    </StyledLogo>
  );
};
