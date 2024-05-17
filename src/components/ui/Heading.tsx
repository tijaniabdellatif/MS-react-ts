import { FC } from 'react';
import styled, { css } from 'styled-components';

type ITitle = {
  as: string;
  text?: string;
};

const Heading = styled.h1<ITitle, any>`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}

    ${(props) =>
    props.as === 'h3' &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}

    ${(props) =>
    props.as === 'h4' &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}

  line-height: 1.4;
`;

export const StyledHeading: FC<ITitle> = ({ as, text }) => {
  return <Heading as={as}>{text}</Heading>;
};
