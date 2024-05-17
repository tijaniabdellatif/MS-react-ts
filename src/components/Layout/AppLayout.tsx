import { FC } from 'react';
import styled, { css } from 'styled-components';
import { StyledHeading } from 'components/ui/Heading';
import { StyledButton } from 'components/ui/StyledButton';
import { Row } from 'components/ui/Row';
import { FormRow } from 'components/ui/FormRow';

import { Header } from './Header';

type IForm = {
  type: string;
};

const Form = styled.form<IForm, any>`
  ${(props) =>
    props.type !== 'modal' &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;
`;

export default Form;

const StyledAppLayout = styled.div<HTMLDivElement, any>`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Main = styled.main<HTMLElement, any>`
  background-color: var(--color-grey-50);
  padding: 0 1rem 1rem 1rem;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div<HTMLDivElement, any>`
  max-width: 120rem;
  display: flex;
  margin: 12rem auto;
`;

const HeaderContainer = styled.header<HTMLElement, any>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-sm);
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);

  &::placeholder {
    font-size: 1.5rem;
  }
`;

export const AppLayout: FC = () => {
  return (
    <StyledAppLayout>
      <HeaderContainer>
        <Header />
        <StyledHeading as="h1" text="Welcome to my world" />
      </HeaderContainer>

      <Main>
        <Container>
          <Row type="vertical">
            <StyledHeading as="h2" text="Search users" />
            <Form>
              <FormRow label={'Search users :'} error={''} id="name">
                <Input type="text" id="name" placeholder="Username" />
                <StyledButton variation="danger" size="small">
                  Search
                </StyledButton>
              </FormRow>
            </Form>
          </Row>
        </Container>
      </Main>
    </StyledAppLayout>
  );
};
