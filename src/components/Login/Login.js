import React, { useState } from 'react';

// Redux
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';

// Firebase
import { auth } from '../../firebase.config';

// Components
import Button from '../Common/Button/Button';
import Message from '../Message/Message';

// Components
import { AuthenticationStyles } from '../Authentication/AuthenticationStyles';
import { addUser } from '../../store/reducers/user';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();

    // sign in user from firebase auth
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const { user } = userCredential;
        dispatch(addUser(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);

        setMessage(`Sorry, this account does not exist.`);
      });
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
