import React from 'react'

const ItemDetail = ({ product = {} }) => {
  return (
    <div className="item-detail">
      <img className="item-detail-img" src={product.image} alt="" />
      <div className="item-detail-text">
        <p className="item-detail-title">{product.title}</p>
        <p className="item-detail-description">{product.description}</p>
        <p className="item-detail-price">${product.price} USD</p>
      </div>
    </div>
  )
}

export default ItemDetail