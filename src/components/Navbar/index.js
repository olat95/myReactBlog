import React from 'react'
import '../../style/style.css'
import profile from '../../images/profile.png'
import {
  Container,
  NavbarList,
  NavbarListItem,
  NavbarRImg,
  NavCenter,
  NavLeft,
  NavLink,
  NavRight,
} from './NavBarElement'

const Navbar = () => {
  const user = false

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
          <NavbarListItem>
            <NavLink to='/'>HOME</NavLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavLink to='/about'>ABOUT</NavLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavLink to='/contact'>CONTACT</NavLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavLink to='/write'>WRITE</NavLink>
          </NavbarListItem>
          <NavbarListItem>
            <NavLink to='/'>{user && 'LOGOUT'}</NavLink>
          </NavbarListItem>
        </NavbarList>
      </NavCenter>
      <NavRight>
        {user ? (
          <NavbarRImg src={profile} alt='profile picture' />
        ) : (
          <NavbarList>
            <NavbarListItem>
              <NavLink to='/login'>LOGIN</NavLink>
            </NavbarListItem>
            <NavbarListItem>
              <NavLink to='/register'>REGISTER</NavLink>
            </NavbarListItem>
          </NavbarList>
        )}
        <i className='topSearchIcon fa-solid fa-magnifying-glass'></i>
      </NavRight>
    </Container>
  )
}

export default Navbar
