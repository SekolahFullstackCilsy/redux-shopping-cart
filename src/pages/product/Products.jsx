import React, {useEffect} from 'react'
import {ProductsStyled, Card} from './ProductsStyles'
import {Button} from '../../components/button/Button'
import { connect } from 'react-redux'
import { addToCart, getProducts } from '../../store/actions/product'

const Product = (props) => {
  useEffect(() => {
    props.getProducts()
  }, []);

  console.log(props)

  const handleAddToCart = (id) => {
    props.addToCart(id)
    alert('Added to cart')
    props.history.push('/cart')
  }

  return (
    <div>
      <h2>Welcome, Product</h2>
      <ProductsStyled>
        {props.products && props.products.map((val, key) => (
          <Card key={key}>
            <img src={val.imageUrl} alt={val.productName}/>
            <h2>{val.productName}</h2>
            <p>{val.description}</p>
            <h5>Stock : {val.stock}</h5>
            <h4>Price : {val.price}</h4>
            <Button onClick={() => handleAddToCart(val.id)}>Add To Cart</Button>
          </Card>
        ))}
      </ProductsStyled>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    carts: state.productReducer.carts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    addToCart: (id) => dispatch(addToCart(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product)