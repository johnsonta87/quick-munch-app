import React, { useState } from 'react';

// Firebase
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

// Components
import Button from '../Common/Button/Button';
import Message from '../Message/Message';

// Styles
import { AuthenticationStyles } from '../Authentication/Authentication.styles';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();

    // sign new user to firebase auth
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;

        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        setMessage(`${errorCode}: ${errorMessage}`);
      });

    // reset form
    setEmail('');
    setPassword('');
  };

  return (
    <AuthenticationStyles>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="button"
        onClick={submit}
        value="Sign up"
        disabled={email === '' || password === ''}
      />

      {message && <Message value={message} />}
    </AuthenticationStyles>
  );
}
