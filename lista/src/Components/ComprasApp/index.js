import {createStore, combineReucer} from 'redux';

const addNewItem = (nombre,precio, cantidad) => ({
  type: 'NEW_ITEM_ADDED',
  payload: nombre, precio, cantidad,
})

const addToList = (id) => ({
  type: 'ADDED_TO_LIST',
  payload: id,
})



const comprasApp = () =>{

}