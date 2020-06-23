import React, { createContext, useReducer } from 'react';
import { StokReducer } from '../reducers/StokReducer'

export const ItemBatchContext = createContext();

const ItemBatchContextProvider = (props) => {

  const init = [
    {idItemBatch:1, idBatch:'11', noItem:1, nama:'HPK 200 M', qty:100},
    {idItemBatch:2, idBatch:'11', noItem:2, nama:'alkohol', qty:200},
    {idItemBatch:3, idBatch:'11', noItem:3, nama:'solvent', qty:300},
    {idItemBatch:4, idBatch:'12', noItem:1, nama:'HPK 200 M', qty:400},
    {idItemBatch:5, idBatch:'12', noItem:2, nama:'alkohol', qty:500},
    {idItemBatch:6, idBatch:'12', noItem:3, nama:'solvent', qty:600},
  ];

  const [dataItem, dispatch] = useReducer(StokReducer, [...init]);
  return (
    <ItemBatchContext.Provider value={{dataItem, dispatch}}>
      {props.children}
    </ItemBatchContext.Provider>
  );

}

export default ItemBatchContextProvider;