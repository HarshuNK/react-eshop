import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'


const url = `https;//fakestoreapi.com`
function ProductCart() {
  const [cart,setCart] = useState([])

  // read the carts data
  const readCart = async () => {
    await axios.get(`${url}/carts`)
      .then(res => {
          // console.log(`carts =`, res.data)
          
      }).catch(err => toast.error(err.response.data.msg))
  }

  useEffect(() => {
    readCart()
},[])
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h3>Cart Info</h3>
          <tabel className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            
            <tbody>
                {

                }
            </tbody>
          </tabel>
        </div>
      </div>
    </div>
  )
}

export default ProductCart
