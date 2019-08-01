import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { register, login, getHome, getUsers, getUser, updateUser, deleteUser } from '../actions/actions';
//STYLE
const H2 = styled.h2`text-align: center;`;
const H3 = styled.h2`text-align: center;`;
const InputDiv = styled.div`display: flex; flex-direction: column; justify-content: center;`;
const SignUpDiv = styled.div`border-bottom: 1px solid black; text-align: center; height: 350px;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 100px; height: 40px;`;
const Label = styled.label`margin: 10px;`;
const Input = styled.input`margin: 10px; border-radius: 3px;`;

function SignUpForm(props) {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: ""
  })

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
  }

  function onSubmit(event) {
    event.preventDefault();
    registerHandler();
    console.log(credentials);
    setCredentials({name: "", email: "", password: ""});
  }


  const registerHandler = () => {
    let creds = {
      name: credentials.name,
      email: credentials.email,
      password: credentials.password,
      role: "user"
    }
    props.register(creds)
  }

  return (
    <SignUpDiv className="signup-container">
      <H2>Don't have an account?</H2>
      <H3>Sign Up!</H3>
      <form onSubmit={onSubmit}>
        <InputDiv>
          <Label>Enter Your Name!!!!
            <Input placeholder="John Doe" value={credentials.name} name="name" onChange={onChange} type="text" />
          </Label>
          <Label>Enter Email Address
            <Input placeholder="johndoe@email.com" value={credentials.email} name="email" onChange={onChange} type="email" />
          </Label>
          <Label>Choose a password!
            <Input placeholder="enter password" value={credentials.password} name="password" onChange={onChange} type="password" />
          </Label>
        </InputDiv>
          <Button type="submit">Create Account</Button>
      </form>
    </SignUpDiv>
  )
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login, getHome, getUsers, getUser, updateUser, deleteUser})(SignUpForm);