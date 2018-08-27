import {createStore, combineReducers} from 'redux';


const addNewItem = (nombre,precio, cantidad) => ({
  type: 'NEW_ITEM_ADDED',
  payload: nombre, precio, cantidad,
})

const isAdded = (items = [], action) => {
  switch(action.type){
    case 'NEW_ITEM_ADDED':{
      return items;
    }
    default:{
      return items;
    }
  }
};

const addToList = (id) => ({
  type: 'ADDED_TO_LIST',
  payload: id,
})

const newItem = (state = [], action) => {
  switch(action.type){
    case 'ADDED_TO_LIST':{
      return state;
    }
    default:{
      return state;
    }
  }
};

const reducer = combineReducers(
  isAdded,
  newItem
)

const store = createStore(reducer);

const comprasApp = () =>{

}