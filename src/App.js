import React, { useEffect, useState } from 'react';

// Firebase
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.config';

// Components
import Authentication from './components/Authentication/Authentication';

// Styles
import { AppContainer } from './styles/app.styles';
import Shop from './components/Shop/Shop';

function App() {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const { uid } = user;

        setLogged(true);
      } else {
        // User is signed out
        setLogged(false);
      }
    });
  }, []);

  return <AppContainer>{logged ? <Shop /> : <Authentication />}</AppContainer>;
}

export default App;
