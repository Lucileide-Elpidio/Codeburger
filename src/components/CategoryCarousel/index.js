import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categorias.png'
import api from '../../Services/api'
import { Container, CategoryImg } from './style'

function CategoryCarrosel() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')
      setCategories(data)
    }
    loadCategories()
  }, [])

  return (
    <Container>
      <CategoryImg src={Category} alt="logo-categories" />
      <Carousel itemsToShow={4}>
        {categories.map(category => (
          <div key={category.id}>
            <img src={category.url} alt="foto-da-categoria" />
            <button>{category.name}</button>
          </div>
        ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarrosel
