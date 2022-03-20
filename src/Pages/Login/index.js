import React from 'react'
import {
  Container,
  LoginButton,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginTitle,
  RegButton,
  RegLink,
} from './LoginElement'

const Login = () => {
  return (
    <Container>
      <LoginTitle>Login</LoginTitle>
      <LoginForm>
        <LoginLabel>Email</LoginLabel>
        <LoginInput type='text' placeholder='Enter your email' />
        <LoginLabel>Password</LoginLabel>
        <LoginInput type='password' placeholder='Enter your password' />
        <LoginButton>Login</LoginButton>
      </LoginForm>
      <RegButton>
        <RegLink to='/register'>Register</RegLink>
      </RegButton>
    </Container>
  )
}

export default Login
