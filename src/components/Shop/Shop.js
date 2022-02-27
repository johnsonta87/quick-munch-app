import React from 'react';

// Components
import Logout from '../Logout/Logout';
import NavShop from '../Nav/NavShop';
import Heading from '../Common/Heading/Heading';

// Styles
import { ShopStyles } from './ShopStyles';
import MostPopular from './MostPopular/MostPopular';
import Account from '../Account/Account';
import Search from './Search/Search';

export default function Shop() {
  return (
    <ShopStyles>
      <Logout />
      <Account />

      <Heading value="Find and order for a munch!" />

      <Search />

      <MostPopular />

      <NavShop />
    </ShopStyles>
  );
}
