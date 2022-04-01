import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Posts from '../../components/Posts'
import Sidebar from '../../components/Sidebar'
import { Container } from './HomeElement'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const Home = () => {
  const [posts, setPosts] = useState([])
  const { search } = useLocation()

  // console.log(location)

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(`posts/${search}`)
      setPosts(response.data)
    }

    fetchPosts()
  }, [search])

  return (
    <>
      <Header />
      <Container>
        <Posts posts={posts} />
        <Sidebar />
      </Container>
    </>
  )
}

export default Home
