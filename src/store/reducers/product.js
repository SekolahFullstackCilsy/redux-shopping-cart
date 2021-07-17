import { ADD_TO_CARTS, GET_CARTS, GET_PRODUCTS } from '../constants'

const initialState = {
  products: [],
  carts: []
}

const productReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload
      }
    
    case ADD_TO_CARTS:
      const carts = state.carts
      const findProduct = state.products.find((val) => val.id === payload)
      carts.push({...findProduct, qty: 1})
     
      return {
        ...state,
        carts: carts
      }
  
    default:
      return state
  }
}

export default productReducer