import React, { createContext, useReducer } from 'react';
import { StokReducer } from '../reducers/StokReducer'

export const AirContext = createContext();

const AirContextProvider = (props) => {

  const init = [
    {id:1, nama:'air', nonota:'gls-df/abc/11/22', tanggal:'01-01-2021', masuk:0, keluar:'',sisa:0},
    {id:2, nama:'air', nonota:'gls-df/abc/22/33', tanggal:'02-02-2022', masuk:1000, keluar:'', sisa:1000},
    {id:3, nama:'JP 24', nonota:'gls-jp/abc/44/55', tanggal:'02-02-2022', masuk:0, keluar:'', sisa:0},
    {id:4, nama:'JP 24', nonota:'gls-jp/def/33/44', tanggal:'02-02-2022', masuk:1500, keluar:'', sisa:1500},
    {id:5, nama:'PVC 680', nonota:'gls-pvc/def/33/44', tanggal:'02-02-2022', masuk:0, keluar:'', sisa:0},
    {id:6, nama:'PVC 680', nonota:'gls-pvc/def/33/44', tanggal:'02-02-2022', masuk:2500, keluar:'', sisa:2500},
    {id:7, nama:'Bioc P-520', nonota:'bioc-520/def/33/44', tanggal:'02-02-2022', masuk:0, keluar:'', sisa:0},
    {id:8, nama:'Bioc P-520', nonota:'bioc-520/def/33/44', tanggal:'02-02-2022', masuk:5000, keluar:'', sisa:2500},
  ];

  const [datas, dispatch] = useReducer(StokReducer, [...init]);
  
  return (
    <AirContext.Provider value={{datas, dispatch}}>
      {props.children}
    </AirContext.Provider>
  );

}

export default AirContextProvider;