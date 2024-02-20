'use client';

import { styled } from 'styled-components';

import { theme } from '@lawallet/ui';

export const AsidePrimitive = styled.aside`
  height: 500px;

  background-color: ${theme.colors.white};

  color: ${theme.colors.black};

  > div {
    justify-content: center;
  }

  button {
    min-width: 240px;
  }
`;
