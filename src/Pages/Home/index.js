import React from 'react'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import { Container } from './HomeElement'

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Posts />
        <Sidebar />
      </Container>
    </>
  )
}

export default Home
