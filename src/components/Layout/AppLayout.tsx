import React, { FC, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { StyledHeading } from 'components/ui/Heading';
import { StyledButton } from 'components/ui/StyledButton';
import { Row } from 'components/ui/Row';
import { FormRow } from 'components/ui/FormRow';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { Spinner } from 'components/ui/Spinner';
import { IPayload } from 'services/action-creators';
import { InfoUser } from 'components/ui/InfoWrapper';
import User from 'components/ui/User';

import { Header } from './Header';

type IForm = {
  type: string;
};

const Form = styled.form<IForm, any>`
  ${(props) =>
    props.type !== 'modal' &&
    css`
      padding: 2.4rem 4rem;
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
  margin: 7rem auto;
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
  width: 30%;

  &::placeholder {
    font-size: 1.2rem;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const AppLayout: FC = () => {
  const [term, setTerm] = useState('');
  const { searchGithubUsers } = useActions();
  const { loading, data, error } = useTypedSelector((state) => state.githubusers);

  console.log(data);

  const fullName = data.map((item: IPayload | any) => {
    if (item.fullname === null) {
      return '💀 username not communicated';
    }

    return item.fullname;
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchGithubUsers(term);

    if (!loading) {
      setTerm('');
    }
  };
  return (
    <StyledAppLayout>
      <HeaderContainer>
        <Header />

        <StyledHeading as="h1" text={'Github world'} />

        <StyledHeading as="h1" text={fullName[0] || '...'} />

        {loading && <Spinner />}
      </HeaderContainer>
      <Main>
        <Container>
          <Row type="vertical">
            <Row type="vertical">
              <StyledHeading as="h2" text="Search users" />
              <Form onSubmit={onSubmit}>
                <FormRow label={'Search users :'} error={error!} id="name">
                  <Input type="text" id="name" placeholder="username" value={term} onChange={(e) => setTerm(e.target.value)} />
                  <StyledButton variation="primary" size="medium">
                    Search
                  </StyledButton>
                </FormRow>
              </Form>
            </Row>
            <Row type="vertical">
              {loading && (
                <>
                  <StyledHeading as="h2" text={error!} />
                  <Spinner />
                </>
              )}
              {!error &&
                !loading &&
                data.map((item: IPayload | any) => {
                  return (
                    <>
                      <InfoUser
                        public_gists={item.public_gists}
                        followers={item.followers}
                        public_repos={item.public_repos}
                        following={item.following}
                      />

                      <Row type="horizontal">
                        <User
                          fullname={item.fullname}
                          image={item.image}
                          url={item.url}
                          bio={item.bio}
                          blog={item.blog}
                          twitter={item.twitter}
                          location={item.location}
                          company={item.company}
                          login={item.login}
                        />
                      </Row>
                    </>
                  );
                })}
            </Row>
          </Row>
        </Container>
      </Main>
    </StyledAppLayout>
  );
};
