'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { Text, Divider, Container, Flex, Heading, Input, InputGroup, InputGroupRight, theme } from '@lawallet/ui';

import { ItemFeaturePrimitive } from './style';

interface HeaderProps {
  children: ReactNode;
  src: string;
  number: number;
  title: string;
  description?: string;
}

export default function Header(props: HeaderProps) {
  const { children, src = '', title, description, number } = props;

  return (
    <ItemFeaturePrimitive>
      {src && <Image src={`/features/${src}`} width={434} height={250} alt={title} priority={true} />}
      <div className='box'>
        <div className='info'>
          <span>{number}.</span>
          <Divider y={4} />
          <Heading as='h2'>{title}</Heading>
          <Divider y={8} />
          {description && <Text color={theme.colors.gray50}>{description}</Text>}
        </div>
        <Divider y={12} />
        {children}
      </div>
    </ItemFeaturePrimitive>
  );
}
