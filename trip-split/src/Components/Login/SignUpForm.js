import React, { useState } from 'react';
import styled from 'styled-components';

function SignUpForm() {

  return (
    <div className="signup-container">
      <form onSubmit={null}>
        <label>Enter Email Address
          <input value={null} name="name" onChange={null} type="email" />
        </label>
        <label>Enter a Password
          <input value={null} name="name" onChange={null} type="password" />
        </label>
          <button type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm;