'use client';

import { styled } from 'styled-components';

import { theme } from '@lawallet/ui';

export const ItemFeaturePrimitive = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;

  margin: 20px 0;

  @media screen and (min-width: 961px) {
    flex-direction: row;
  }

  img {
    width: 100%;
    height: auto;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    min-width: 300px;

    padding: 24px;
  }

  .info {
    span {
      color: ${theme.colors.gray50};
    }
  }
`;
