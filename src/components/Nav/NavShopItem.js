import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { NavShopItemStyles } from './NavShopItem.styles';

export default function NavShopItem({ nav }) {
  return (
    <NavShopItemStyles>
      <button type="button">{nav}</button>
    </NavShopItemStyles>
  );
}

NavShopItem.propTypes = {
  nav: PropTypes.any.isRequired,
};
