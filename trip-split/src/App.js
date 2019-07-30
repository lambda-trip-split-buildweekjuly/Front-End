import React from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm from './Components/Login/LoginForm';
import SignUpForm from './Components/Login/SignUpForm';

function App() {
  return (
    <div>
      <LoginForm/>
      <SignUpForm/>
    </div>
  );
}

export default App;
