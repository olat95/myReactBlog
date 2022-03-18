import React from 'react'
import Header from '../../Header'
import Posts from '../../Posts'
import Sidebar from '../../Sidebar'
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
