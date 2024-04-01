import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import useCart from '../../CustomHook/Cart'


function ProductCart() {
  // const [cart,setCart] = useState(false)
  const {cartData,removeCart,decr,incr,clearCart} =useCart()

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>cart info</h3>
          <table className="table">
            <thead>
              <tr>
                <th colSpan={6}>
                  <button onClick={() => clearCart()} className="btn decr">Clear cart</button>
                </th>
                </tr>
                <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Item Price</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                cartData.cart && cartData.cart.map((item,index) =>{
                  return(
                    <tr key={index}>
                      <td>{item?.title}</td>
                      <td><img src={item?.image} alt='no-image' height={50} width={50} /> </td>
                      <td>&#8377;{item.price}</td>
                      <td>
                        <button onClick={() => decr(item.id)} className="btn decr">-</button>
                        <strong>{item?.quantity}</strong>
                        <button onClick={() => incr(item.id)} className="btn incr">+</button>
                      </td>

                      <td>&#8377; {item?.quantity * item?.price} </td>
                      <td>
                        <button onClick={()=> removeCart(item?.id)} className="btn decr">
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductCart