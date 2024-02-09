import React from 'react'

import "./Product.css"

export default function ProductInfo({ value, title }) {
  return (
    <div className="productInfoItem">
      <div className="productInfoKey">{`${title}: `}</div>
      <div className="productInfoValue">{value}</div>
    </div>
  )
}
