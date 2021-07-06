import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  //image exits along with url
  const url = image && image.url
  return (
    <article className="product">
      {/* if image available then use else deafult, same with name */}
      <img src={url || defaultImage} alt={name || 'default name'} />
      <h4>{name}</h4>
      <p>${price || 14.67}</p>
    </article>
  )
}

//type of props
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// defaultProps can also be used in place of short circuit exal
// Product.defaultProps = {
//   name: 'default name',
//   price: 3.99,
//   image: defaultImage,
// };

export default Product
