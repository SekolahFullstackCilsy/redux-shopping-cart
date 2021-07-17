import { GET_PRODUCTS, ADD_TO_CARTS, GET_CARTS } from "../constants";

export const getProducts = () => {
  // request ke Backend

  return {
    type: GET_PRODUCTS,
    payload: [
      {
        id: 1,
        productName: 'Hijab Modern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
        imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
        stock: 20,
        stock_real: 20,
        price: 150000,
      },
      {
        id: 2,
        productName: 'Hijab Casual',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
        imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
        stock: 30,
        stock_real: 30,
        price: 250000,
      },
      {
        id: 3,
        productName: 'Hijab Cewe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, et aut? Hic rerum non incidunt eligendi debitis porro nisi architecto?',
        imageUrl: 'https://dynamic.zacdn.com/M4OvDMc9G1V3qqQNw10f_H_kbco=/fit-in/346x500/filters:quality(90):fill(ffffff)/http://static.id.zalora.net/p/diindri-hijab-1188-8554461-1.jpg',
        stock: 25,
        stock_real: 25,
        price: 550000,
      },
    ]
  };
};

export const addToCart = (id) => {
   return {
    type: ADD_TO_CARTS,
    payload: id
  };
}

export const getCarts = () => {
  return {
    type: GET_CARTS,
  }
}