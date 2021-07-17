import React from 'react'
import {NavLink, withRouter} from 'react-router-dom'
import {NavbarStyled} from './NavbarStyles'
import { connect } from 'react-redux'
import { getCarts } from '../../store/actions/product'

const Navbar = (props) => {
  return (
    <NavbarStyled>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/cart">Cart <span>{props.carts.length}</span></NavLink></li>
        <li><NavLink to="/auth">Sign In / Register</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </NavbarStyled>
  )
}

const mapStateToProps = (state) => {
  return {
    // products: state.productReducer.products,
    carts: state.productReducer.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCarts: () => dispatch(getCarts()),
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar))