'use client';

import { styled } from 'styled-components';

import { theme } from '@lawallet/ui';

export const HeaderPrimitive = styled.header`
  height: 500px;

  background-color: ${theme.colors.black};

  > div {
    justify-content: center;
  }
`;
