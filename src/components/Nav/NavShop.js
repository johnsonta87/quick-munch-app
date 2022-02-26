import React from 'react';

import {
  AiFillHome,
  AiFillShopping,
  AiTwotoneHeart,
  AiOutlineSolution,
} from 'react-icons/ai';

export default function NavShop() {
  const list = [
    { icon: <AiFillHome /> },
    { icon: <AiFillShopping /> },
    { icon: <AiTwotoneHeart /> },
    { icon: <AiOutlineSolution /> },
  ];

  return (
    <ul>{list && list.map((nav, index) => <li key={index}>{nav.icon}</li>)}</ul>
  );
}
