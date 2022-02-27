import React from 'react';

// Firebase
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase.config';

// Components
import Button from '../Common/Button/Button';

export default function Logout() {
  const SignOut = () => {
    signOut(auth);
  };

  return <Button type="button" onClick={SignOut} value="Logout" />;
}
