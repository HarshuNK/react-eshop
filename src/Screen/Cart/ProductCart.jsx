import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'



function ProductCart() {
  const [cart,setCart] = useState([])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Cart Info</h3>
          <tabel className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
                {
                    card && card.products.map((item,index) => {
                      
                    })
                }
            </tbody>
          </tabel>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
