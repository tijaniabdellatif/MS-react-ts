import { FC } from 'react';
import styled from 'styled-components';

import { Header } from './Header';

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow: scroll;
`;

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

export const AppLayout: FC = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Container></Container>
      </Main>
    </StyledAppLayout>
  );
};
