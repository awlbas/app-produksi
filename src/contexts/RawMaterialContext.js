import React, { createContext, useReducer } from 'react';
// import { itemReducer } from '../reducers/ItemReducer'
import { StokReducer } from '../reducers/StokReducer';

export const RawMaterialContext = createContext();

const RawMaterialContextProvider = (props) => {

  const init = [
    {id:1, nama:'air',total: 1000},
    {id:2, nama:'JP 24',total:1500},
    {id:3, nama:'PVC 680',total:2500},
    {id:4, nama:'Bioc P-520',total:5000}
  ];

  const [items, dispatch] = useReducer(StokReducer, [...init]);
  
  return (
    <RawMaterialContext.Provider value={{items, dispatch}}>
      {props.children}
    </RawMaterialContext.Provider>
  );

}

export default RawMaterialContextProvider;