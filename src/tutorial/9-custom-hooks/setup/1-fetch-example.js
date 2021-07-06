import React from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const { loading, products } = useFetch(url)
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id} className="item">
              {product.fields.name}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Example
