import React from 'react'
import '../../style/style.css'
import {
  Container,
  SidebarDesc,
  SidebarImg,
  SidebarItem,
  SidebarList,
  SidebarListItem,
  SidebarSocial,
  SidebarTitle,
} from './SidebarElement'
import myprofile from '../../images/pelumi edit3.jpg'

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem>
        <SidebarTitle>MY PROFILE</SidebarTitle>
        <SidebarImg src={myprofile} />
        <SidebarDesc>
          I am a fullstack software developer with a strong passion for learning
          new technologies. In the latter years, I will like to transition to
          network security, to be more specific, Ethical hacking. This has been
          my childhood dream and I'll stop at nothing to achieve it. Ready to
          learn and relearn.
        </SidebarDesc>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>CATEGORIES</SidebarTitle>
        <SidebarList>
          <SidebarListItem>Life</SidebarListItem>
          <SidebarListItem>Technology</SidebarListItem>
          <SidebarListItem>Health</SidebarListItem>
          <SidebarListItem>Sport</SidebarListItem>
          <SidebarListItem>Christianity</SidebarListItem>
          <SidebarListItem>Movies</SidebarListItem>
          <SidebarListItem>News</SidebarListItem>
          <SidebarListItem>Inventions</SidebarListItem>
          <SidebarListItem>Games</SidebarListItem>
        </SidebarList>
      </SidebarItem>
      <SidebarItem>
        <SidebarTitle>FOLLOW ME</SidebarTitle>
        <SidebarSocial>
          <i className='topIcon fa-brands fa-facebook-square'></i>
          <i className='topIcon fa-brands fa-twitter-square'></i>
          <i className='topIcon fa-brands fa-linkedin'></i>
          <i className='topIcon fa-brands fa-github-square'></i>
          <i className='topIcon fa-brands fa-instagram-square'></i>
        </SidebarSocial>
      </SidebarItem>
    </Container>
  )
}

export default Sidebar
