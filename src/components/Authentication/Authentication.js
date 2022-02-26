import React, { useState } from 'react';

// Components
import Login from '../Login/Login';
import Logo from '../Logo/Logo';
import Signup from '../Signup/Signup';

// Styles
import { AuthenticationContainer } from './AuthenticationStyles';

export default function Authentication() {
  const [guest, setGuest] = useState();

  return (
    <AuthenticationContainer>
      <Logo />

      {guest ? (
        <div>
          <Login />
          <div className="guest-subtext">
            Don't have an account?{' '}
            <button type="button" onClick={() => setGuest(!guest)}>
              Sign up
            </button>
            .
          </div>
        </div>
      ) : (
        <div>
          <Signup />
          <div className="guest-subtext">
            Have an account?{' '}
            <button type="button" onClick={() => setGuest(!guest)}>
              Sign in
            </button>
            .
          </div>
        </div>
      )}
    </AuthenticationContainer>
  );
}
