import React, { useState } from 'react';
import styled from 'styled-components';
//STYLE
const LoginDiv = styled.div`width: 500px; border: 1px solid red; text-align: center; height: 200px;`;
const InputDiv = styled.div`display: flex; justify-content: center;`;
const Input = styled.input`margin-left: 10px; border-radius: 3px;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 100px; height: 40px;`;

function LoginForm() {

  return (
    <LoginDiv className="login-container">
      <h1>Sign In</h1>
        <form onSubmit={null}>
          <InputDiv>
            <Input placeholder="Email" value={null} name="name" onChange={null} type="email" />
            <Input placeholder="Password" value={null} name="name" onChange={null} type="password" />
          </InputDiv>
            <Button type="submit">Sign In</Button>
        </form>
    </LoginDiv>
  )
}

export default LoginForm;