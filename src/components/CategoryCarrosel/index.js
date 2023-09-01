import React from 'react'

import Categories from '../../assets/categorias.png'
import { Container, CategoryImg } from './style'
function CategoryCarrosel() {
  return (
    <Container>
      <CategoryImg src={Categories} alt="logo-categories" />
    </Container>
  )
}

export default CategoryCarrosel
