// import useEffect hook
import React, { useEffect, useState }  from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify'

function checkUser() {
   Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
}

function signOut() {
  Auth.signOut()
    .then(data => console.log(data))
    .catch(err => console.log(err));
}

function App(props) {
   const [user, setUser] = useState('')
   useEffect(() => {

   Auth.currentAuthenticatedUser()
    .then(user => {
		console.log({ user });
                setUser('bob');
	})
    .catch(err => console.log(err));
   }, []);
  

   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={checkUser}>Check User</button>
        {user === '' ? (
		<button onClick={() => Auth.federatedSignIn()}>Sign In</button>
                ) : (
		<button onClick={signOut}>Sign Out</button>
                )}

      </header>
    </div>
  );


}


export default App

