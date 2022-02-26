import React from 'react';

import {
  AiFillHome,
  AiFillShopping,
  AiTwotoneHeart,
  AiOutlineSolution,
} from 'react-icons/ai';
import { NavShopStyles } from './NavShop.styles';
import NavShopItem from './NavShopItem';

export default function NavShop() {
  const list = [
    { icon: <AiFillHome /> },
    { icon: <AiFillShopping /> },
    { icon: <AiTwotoneHeart /> },
    { icon: <AiOutlineSolution /> },
  ];

  if (!list) return null;

  return (
    <NavShopStyles>
      <ul>
        {list.map((nav, index) => (
          <NavShopItem key={index} nav={nav?.icon} />
        ))}
      </ul>
    </NavShopStyles>
  );
}
