import styled, { css } from 'styled-components';

type IRow = {
  type: string;
};



export const Row = styled.div<IRow, any>`
  display: flex;
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
