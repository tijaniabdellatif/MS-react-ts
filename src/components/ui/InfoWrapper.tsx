import styled from 'styled-components';
import React from 'react';
import { GoRepo, GoGitPullRequest } from 'react-icons/go';
import { FaUser, FaUserPlus } from 'react-icons/fa';
import { IconType } from 'react-icons';

import { StyledHeading } from './Heading';

const Section = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
`;
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--border-radius-sm);
    padding: 1rem 2rem;
    background: var(--color-brand-50);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--color-green-100);
      color: var(--color-grey-900);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

type IUserInfo = {
  public_repos?: number;
  followers?: number;
  public_gists?: number;
  following?: number;
};

interface IInfo {
  id: number;
  icon: React.ReactNode;
  label: string;
  value: number;
  color: string;
}

export const InfoUser: React.FC<IUserInfo> = ({ public_gists, public_repos, followers, following }) => {
  const metrics: IInfo[] = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'Repos',
      value: public_repos!,
      color: 'pink',
    },
    {
      id: 2,
      icon: <GoRepo />,
      label: 'Gists',
      value: public_gists!,
      color: 'yellow',
    },
    {
      id: 3,
      icon: <FaUser />,
      label: 'Following',
      value: following!,
      color: 'purple',
    },
    {
      id: 4,
      icon: <FaUserPlus />,
      label: 'Followers',
      value: followers!,
      color: 'green',
    },
  ];
  return (
    <Wrapper>
      {metrics.map((item: IInfo) => {
        return (
          <article className="item" key={item.id}>
            <span className={item.color}>{item.icon}</span>
            <div>
              <StyledHeading as="h3" text={item.value.toString()} />
              <p>{item.label}</p>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};
