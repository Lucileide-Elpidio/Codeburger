import React, { useEffect } from 'react'

import LogoHome from '../../assets/logo-home.png'
import CategoryCarrosel from '../../components/CategoryCarrosel'
import api from '../../Services/api'
import { Container, LogoImg } from './style'
function Home() {
  useEffect(() => {
    async function loadCategory() {
      const response = await api.get('/categories')
      console.log(response)
    }
    loadCategory()
  }, [])
  return (
    <Container>
      <LogoImg src={LogoHome} alt="logo-home" />
      <CategoryCarrosel />
    </Container>
  )
}

export default Home
