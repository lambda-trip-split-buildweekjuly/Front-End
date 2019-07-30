import React from 'react';
import './App.css';

import LoginForm from './Components/Login/LoginForm';
import SignUpForm from './Components/Login/SignUpForm';
import Trip from './Components/Trip/Trip';

function App() {
  return (
    <div>
      <LoginForm/>
      <SignUpForm/>
      <Trip/>
    </div>
  );
}

export default App;
