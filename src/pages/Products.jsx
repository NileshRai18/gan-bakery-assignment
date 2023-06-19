import React from 'react'
import { Product } from "../components/common"
import productsData from '../data/products'

const Products = () => {
  return (
    <>
      <Product productsData={productsData} showFilter={true} title="All Products"/>
    </>
  )
}

export default Products