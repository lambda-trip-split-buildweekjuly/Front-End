import React, { useState } from 'react';
import styled from 'styled-components';
//STYLE
const H2 = styled.h2`text-align: center;`;
const H3 = styled.h2`text-align: center;`;
const InputDiv = styled.div`display: flex; flex-direction: column; justify-content: center;`;
const SignUpDiv = styled.div`border-bottom: 1px solid black; text-align: center; height: 290px;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 100px; height: 40px;`;
const Label = styled.label`margin: 10px;`;
const Input = styled.input`margin: 10px; border-radius: 3px;`;

function SignUpForm() {

  return (
    <SignUpDiv className="signup-container">
      <H2>Don't have an account?</H2>
      <H3>Sign Up!</H3>
      <form onSubmit={null}>
        <InputDiv>
          <Label>Enter Email Address
            <Input placeholder="johndoe@email.com" value={null} name="name" onChange={null} type="email" />
          </Label>
          <Label>Choose a password!
            <Input placeholder="enter password" value={null} name="name" onChange={null} type="password" />
          </Label>
        </InputDiv>
          <Button type="submit">Create Account</Button>
      </form>
    </SignUpDiv>
  )
}

export default SignUpForm;