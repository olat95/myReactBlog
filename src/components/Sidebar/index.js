import React from 'react'
import {
  Container,
  SidebarDesc,
  SidebarImg,
  SidebarItem,
  SidebarTitle,
} from './SidebarElement'
import myprofile from '../../images/pelumi edit3.jpg'

const Sidebar = () => {
  return (
    <Container>
      <SidebarItem>
        <SidebarTitle>MY PROFILE</SidebarTitle>
        <SidebarImg src={myprofile} />
        <SidebarDesc></SidebarDesc>
      </SidebarItem>
    </Container>
  )
}

export default Sidebar
