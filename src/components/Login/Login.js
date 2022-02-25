import React, { useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import db from '../../firebase.config';
import Button from '../Common/Button/Button';
import { FormStyles } from './login.styles';
import Message from '../Message/Message';
import Logo from '../Logo/Logo';

export default function Login() {
  const [customerName, setCustomerName] = useState('');
  const [customerPassword, setCustomerPassword] = useState('');
  const [message, setMessage] = useState('');
  const colRef = collection(db, 'users');
  getDocs(colRef)
    .then((snapshot) => {
      const users = [];
      snapshot.docs.forEach((doc) => {
        users.push({ ...doc.data(), id: doc.id });
      });
    })
    .catch((err) => {
      console.log(err.message);

      setMessage('Error! Something went wrong.');
    });

  const submit = (e) => {
    e.preventDefault();
    addDoc(colRef, {
      customerName,
      customerPassword,
    });

    setCustomerName('');
    setCustomerPassword('');
  };

  return (
    <div>
      <Logo />

      <FormStyles>
        <input
          type="text"
          placeholder="Enter your name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter password"
          value={customerPassword}
          onChange={(e) => setCustomerPassword(e.target.value)}
        />
        <Button
          type="button"
          onClick={submit}
          value="Sign up"
          disabled={customerName === '' || customerPassword === ''}
        />

        {message && <Message value={message} />}
      </FormStyles>
    </div>
  );
}
