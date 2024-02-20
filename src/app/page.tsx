'use client';

import { Container, Button, LinkButton } from '@lawallet/ui';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Aside from './components/Aside';
import Footer from './components/Footer';
import ItemFeature from './components/ItemFeature';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <ItemFeature title='Create your lightning domain.' src={'one.png'} number={1}>
          <Link
            href='https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flawalletio%2Flightning-domain&env=LAWALLET_API_DOMAIN,AUTOCREATE_NONCE&project-name=lightning-domain&repository-name=lightning-domain&integration-ids=oac_3sK3gnG06emjIEVL09jjntDD'
            target='_blank'
          >
            <Button size='small' variant='borderless' tabIndex={-1}>
              Deploy now en Vercel
            </Button>
          </Link>
        </ItemFeature>
        <ItemFeature title='Create your own wallet.' description='5 minutes deploy' src={'two.png'} number={2}>
          <Link href='https://react.lawallet.io/' target='_blank'>
            <Button size='small' variant='borderless' tabIndex={-1}>
              See our monorepo
            </Button>
          </Link>
        </ItemFeature>
        <ItemFeature title='Create custom plugin.' description='30 minutes tutorial' src={'tree.png'} number={3}>
          <Button size='small' variant='borderless' disabled={true}>
            Under construction
          </Button>
        </ItemFeature>
      </Container>
      <Aside />
      <Footer />
    </>
  );
}
