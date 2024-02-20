'use client';

import { Text, Button, Container, Flex, Heading, theme } from '@lawallet/ui';

import { AsidePrimitive } from './style';
import Link from 'next/link';

export default function Aside() {
  return (
    <AsidePrimitive>
      <Container>
        <Flex direction='column' align='center' gap={8}>
          <Heading as='h3'>Ready for backend?</Heading>
          <Text>Deploy stack modular.</Text>
          <div>
            <Link href='https://backend.lawallet.io/' target='_blank'>
              <Button tabIndex={-1}>See documentation</Button>
            </Link>
          </div>
          <Text size='small' color={theme.colors.gray50}>
            Fully documented!
          </Text>
        </Flex>
      </Container>
    </AsidePrimitive>
  );
}
