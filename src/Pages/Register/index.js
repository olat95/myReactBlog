import React from 'react'
import {
  Container,
  RegisterButton,
  RegisterForm,
  RegisterInput,
  RegisterLabel,
  RegisterTitle,
  LogButton,
  LogLink,
} from './RegisterElement'

const Register = () => {
  return (
    <Container>
      <RegisterTitle>Register</RegisterTitle>
      <RegisterForm>
        <RegisterLabel>Username</RegisterLabel>
        <RegisterInput type='text' placeholder='Enter your username...' />
        <RegisterLabel>Email</RegisterLabel>
        <RegisterInput type='email' placeholder='Enter your email...' />
        <RegisterLabel>Password</RegisterLabel>
        <RegisterInput type='password' placeholder='Enter your password' />
        <RegisterButton>Register</RegisterButton>
      </RegisterForm>
      {/* <LogButton>Login</LogButton> */}
      <LogButton>
        <LogLink to='/login'>Login</LogLink>
      </LogButton>
    </Container>
  )
}

export default Register
