import React from 'react';
import styled from 'styled-components';
import { IPayload } from 'services/action-creators';

import Card from './Card';
import Followers from './Followers';

const User: React.FC<IPayload> = ({ fullname, image, url, company, bio, blog, location,login }) => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card fullname={fullname} image={image} url={url} company={company} bio={bio} blog={blog} location={location} />
        <Followers login={login}  />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
  /* align-items: start; */
`;

export default User;
