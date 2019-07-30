import React, { useState } from 'react';
import styled from 'styled-components';
//STYLE
const H2 = styled.h2`text-align: center;`;
const H3 = styled.h2`text-align: center;`;
const InputDiv = styled.div`display: flex; flex-direction: column; justify-content: center;`;
const SignUpDiv = styled.div` text-align: center;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 100px; height: 40px;`;

function SignUpForm() {

  return (
    <SignUpDiv className="signup-container">
      <H2>Don't have an account?</H2>
      <H3>Sign Up!</H3>
      <form onSubmit={null}>
        <InputDiv>
          <label>Enter Email Address
            <input placeholder="johndoe@email.com" value={null} name="name" onChange={null} type="email" />
          </label>
          <label>Enter a Password
            <input placeholder="enter password" value={null} name="name" onChange={null} type="password" />
          </label>
        </InputDiv>
          <Button type="submit">Create Account</Button>
      </form>
    </SignUpDiv>
  )
}

export default SignUpForm;