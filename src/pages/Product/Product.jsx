import React from 'react'
import { Link, useParams } from 'react-router-dom'
import PublishIcon from "@mui/icons-material/Publish";

import "./Product.css"
import Chart from '../../components/Chart/Chart'
import { productsData, products as productList } from '../../datas'
import ProductInfo from './ProductInfo'

export default function Product() {
  
  const { productID } = useParams()
  const { id, title, avatar, price, stock, model } = productList.find(item => item.id == productID)

  return (
    <div className='product'>
        <div className='productTitleContainer'>
            <h1 className='productTitle'>Product</h1>
            <Link to="/newProduct">
                <button className='productAddButton'>Create</button>
            </Link>
        </div>
        <div className="productTop">
          <div className="productTopLeft">
            <Chart title="Sale In Month" data={productsData} dataKey='sale' />
          </div>
          <div className="productTopRight">
            <div className="productInfoTop">
              <img src={`${avatar}`} alt="Dell LapTop" className='productInfoImg' />
              <span className='productName'>{` ${title}`}</span>
            </div>
            <div className="productInfoBottom">
              <ProductInfo title="ID" value={id}/>
              <ProductInfo title="Model" value={model}/>
              <ProductInfo title="Sale" value={`$${price}`}/>
              <ProductInfo title="In Stock" value={stock}/>
            </div>
          </div>
        </div>
        <div className="productBottom">
          <form className="productForm">
            <div className='productFormLeft'>
              <label>Product Name</label>
              <input type="text" placeholder='Dell Laptop' />
              <label>In Stock</label>
              <select id="inStock">
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div className='productFormRight'>
              <div className='productUploader'>
                <img src="/images/product7.png" alt="profile photo" className='productUploaderImg' />
                <label>
                  <PublishIcon />
                </label>
                <input type="file" style={{display: "none"}} />
              </div>
              <button className='productButton'>Upload (Edit)</button>
            </div>
          </form>
        </div>
    </div>
  )
}