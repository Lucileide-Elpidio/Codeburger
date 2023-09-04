import React from 'react'

import LogoHome from '../../assets/logo-home.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import { Container, LogoImg } from './style'
function Home() {
  return (
    <Container>
      <LogoImg src={LogoHome} alt="logo-home" />
      <CategoryCarousel />
    </Container>
  )
}

export default Home
