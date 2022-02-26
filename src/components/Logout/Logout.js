import React from 'react';

// Firebase
import { signOut } from 'firebase/auth';
import { AiOutlineLogout } from 'react-icons/ai';
import { auth } from '../../firebase.config';

// Components
import Button from '../Common/Button/Button';

export default function Logout() {
  const SignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return <Button type="button" onClick={SignOut} value={<AiOutlineLogout />} />;
}
