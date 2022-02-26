import React from 'react';

// Components
import Logout from '../Logout/Logout';
import NavShop from '../Nav/NavShop';

// Styles
import { ShopStyles } from './shop.styles';

export default function Shop() {
  return (
    <ShopStyles>
      <Logout />

      <NavShop />
    </ShopStyles>
  );
}
