import React from 'react'
import './navbar.css'
import profileImg from '../../images/profilepic.jpg'
import {
  Container,
  NavbarList,
  NavbarListItem,
  NavbarRImg,
  NavCenter,
  NavLeft,
  NavRight,
} from './NavBarElement'

const Navbar = () => {
  return (
    <Container>
      <NavLeft>
        <i className='topIcon fa-brands fa-facebook-square'></i>
        <i className='topIcon fa-brands fa-twitter-square'></i>
        <i className='topIcon fa-brands fa-linkedin'></i>
        <i className='topIcon fa-brands fa-github-square'></i>
        <i className='topIcon fa-brands fa-instagram-square'></i>
      </NavLeft>
      <NavCenter>
        <NavbarList>
          <NavbarListItem>HOME</NavbarListItem>
          <NavbarListItem>ABOUT</NavbarListItem>
          <NavbarListItem>CONTACT</NavbarListItem>
          <NavbarListItem>WRITE</NavbarListItem>
          <NavbarListItem>LOGOUT</NavbarListItem>
        </NavbarList>
      </NavCenter>
      <NavRight>
        <NavbarRImg src={profileImg} alt='profile picture' />
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </NavRight>
    </Container>
  )
}

export default Navbar
