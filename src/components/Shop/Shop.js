import React from 'react';

// Components
import Logout from '../Logout/Logout';
import NavShop from '../Nav/NavShop';
import Heading from '../Common/Heading/Heading';

// Styles
import { ShopStyles } from './ShopStyles';
import MostPopular from './MostPopular/MostPopular';

export default function Shop() {
  return (
    <ShopStyles>
      <Logout />

      <Heading value="Find and order for a munch!" />

      <MostPopular />

      <NavShop />
    </ShopStyles>
  );
}
