'use client';

import Image from 'next/image';
import { Text, Button, Container, Flex, Heading, Input, InputGroup, InputGroupRight, theme } from '@lawallet/ui';

import { HeaderPrimitive } from './style';

export default function Header() {
  return (
    <HeaderPrimitive>
      <Container size='small'>
        <Flex direction='column' gap={16}>
          <Flex direction='column' gap={8} align='center'>
            <Text size='small' color={theme.colors.gray50}>
              Open Source Wallet
            </Text>
            <Heading>Bitcoin-centric</Heading>
            <Text align='center'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
            </Text>
          </Flex>
          <InputGroup>
            <Input placeholder='satoshi@gmail.com' />
            <InputGroupRight>
              <Button variant='borderless' size='small'>
                Suscribe
              </Button>
            </InputGroupRight>
          </InputGroup>
        </Flex>
      </Container>
    </HeaderPrimitive>
  );
}
