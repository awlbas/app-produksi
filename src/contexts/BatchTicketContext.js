import React, { createContext, useReducer } from 'react';
import { StokReducer } from '../reducers/StokReducer'

export const BatchTicketContext = createContext();

const BatchTicketContextProvider = (props) => {

  const init = [
    {idBatch:'11', tanggal:'01-01-2021', namaProduk:'gls 306', qtyOrder:'100'},
    {idBatch:'12', tanggal:'02-02-2021', namaProduk:'gls 307', qtyOrder:'110'},
  ];

  const [dataBatch, dispatchBatch] = useReducer(StokReducer, [...init]);
  
  return (
    <BatchTicketContext.Provider value={{dataBatch, dispatchBatch}}>
      {props.children}
    </BatchTicketContext.Provider>
  );

}

export default BatchTicketContextProvider;