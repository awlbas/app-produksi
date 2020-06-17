import React, { useContext } from 'react'
import { AirContext } from '../contexts/AirContext';
import FormBarangMasuk from './FormBarangMasuk';
function ItemDetail (props) {
  const { datas } = useContext(AirContext);
  const nama = props.match.params.nama_item;
  const items = datas.filter(item => item.nama === nama);
  const sisa = items[items.length-1].sisa;

  const list = items.map(data => {
    return (
      <div key={data.id}>
        <li>
        Tanggal: {data.tanggal} <br/>No Nota: {data.nonota} <br/>Keterangan: {data.keterangan} <br/>
        Masuk: {data.masuk} <br/>Keluar: {data.keluar} <br/>Sisa: {data.sisa} <br/>
        </li>
      </div>
    )
  })

  return(
    <div className="datas">
      <ul>
        <FormBarangMasuk value={{nama,sisa}}/>    
        {list}
      </ul>
    </div>
  )

} 

export default ItemDetail
