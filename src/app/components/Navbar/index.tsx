'use client';

import Image from 'next/image';
import { Container } from '@lawallet/ui';

import { NavbarPrimitive } from './style';

export default function Navbar() {
  return (
    <NavbarPrimitive>
      <Container>
        <Image src='/logo.svg' alt='LaWallet logo' width={111} height={20} />
      </Container>
    </NavbarPrimitive>
  );
}
