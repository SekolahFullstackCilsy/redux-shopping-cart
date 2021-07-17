import React from 'react'
import { Button } from '../../components/button/Button'
import {CartStyled, CartList, CartSummary} from './CartStyles'
import { connect } from 'react-redux'

const Cart = (props) => {

  console.log(props)
  return (
    <div>
      <h2>Daftar Keranjang</h2>
      <CartStyled>
        <CartList>
          {props.carts.length < 1 ? (
            <h2>Cart is empty !</h2>
          ) : (
            <table width="80%">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Product Name</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              {props.carts && props.carts.map((val, key) => {
                const subtotal = val.qty * val.price
                return (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{val.productName}</td>
                    <td>
                      <button>-</button>
                      <input
                        value={val.qty}
                      />
                      <button>+</button>
                    </td>
                    <td>{val.price}</td>
                    <td>{subtotal}</td>
                    <td><Button>Delete</Button></td>
                  </tr>
                )
              })}
              </tbody>
            </table>
          )}
        </CartList>
        <CartSummary>
          <h2>Total : 200000</h2>
          <Button>Checkout</Button>
        </CartSummary>
      </CartStyled>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  }
}

export default connect(mapStateToProps, null)(Cart)