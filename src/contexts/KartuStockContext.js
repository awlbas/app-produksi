import React, { createContext, useReducer } from 'react';
import { StokReducer } from '../reducers/StokReducer'

export const KartuStockContext = createContext();

const KartuStockContextProvider = (props) => {

  const init = [
    {id:1, item: 'HPK 200 M', tanggal:'01-01-2021', noNota:'gls 306', masuk:1000, keluar:0, sisa:1000, keterangan:'Stock Awal'},
    {id:2, item: 'HPK 200 M', tanggal:'02-02-2021', noNota:'gls 307', masuk:0, keluar:400, sisa:600, keterangan:'produksi gls 307'},
  ];

  const [dataKartuStock, dispatchKartuStock] = useReducer(StokReducer, [...init]);
  
  return (
    <KartuStockContext.Provider value={{dataKartuStock, dispatchKartuStock}}>
      {props.children}
    </KartuStockContext.Provider>
  );

}

export default KartuStockContextProvider;