import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';
import { connect } from 'react-redux';
import { register, login } from '../actions/actions';
import SignUpForm from './SignUpForm';

//STYLE
const LoginDiv = styled.div`border-bottom: 1px solid black; text-align: center; height: 560px;`;
const InputDiv = styled.div`display: flex; justify-content: center;`;
const Input = styled.input`margin-left: 10px; border-radius: 3px;`;
const Button = styled.button`margin-top: 20px; border-radius: 10px; width: 100px; height: 40px;`;

function LoginForm(props) {

  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  })

  function onChange(event) {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
    console.log(credentials);
  }

  function onSubmit(event) {
    event.preventDefault();
    loginHandler();
    console.log(credentials);
    setCredentials({email: "", password: ""}); 
  }

  const loginHandler = () => {
    let credss = {
      email: credentials.email,
      password: credentials.password
    }
    props.login(credss)
      .then(res => {
        props.history.push('/')
      })
  }

  return (
    <LoginDiv className="login-container">
      <img src={logo} alt = ""></img>
      <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <InputDiv>
            <Input placeholder="Email" value={credentials.email} name="email" onChange={onChange} type="email" />
            <Input placeholder="Password" value={credentials.password} name="password" onChange={onChange} type="password" />
          </InputDiv>
            <Button type="submit">Sign In</Button>
        </form>
        <SignUpForm />
    </LoginDiv>
  )
}

function mapStateToProps(state){
  // console.log(state)
  return {}
}

export default connect(mapStateToProps, {register, login})(LoginForm);
