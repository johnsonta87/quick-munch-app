import React from 'react';

// Redux
import { useSelector } from 'react-redux';

export default function Account() {
  const xState = useSelector((state) => state);
  const userDetails = useSelector((state) => state.user.details);

  console.log(xState);

  if (!userDetails) return null;

  return (
    <div>
      {userDetails.photoURL}
      {userDetails.email}
    </div>
  );
}
