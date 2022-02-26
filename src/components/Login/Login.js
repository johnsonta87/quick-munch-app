import React, { useState } from 'react';

// Firebase
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config';

// Components
import Button from '../Common/Button/Button';
import Message from '../Message/Message';

// Components
import { AuthenticationStyles } from '../Authentication/Authentication.styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const submit = (e) => {
    e.preventDefault();

    // sign in user from firebase auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        console.log(user);

        setMessage('');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        setMessage(`Sorry, this account does not exist.`);
      });

    // reset form
    setEmail('');
    setPassword('');
  };

  return (
    <AuthenticationStyles>
      <input
        type="email"
        placeholder="Enter email"
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
        value="Sign in"
        disabled={!!(email === '' || password === '')}
      />

      {message && <Message value={message} />}
    </AuthenticationStyles>
  );
}
