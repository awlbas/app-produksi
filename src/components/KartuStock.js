import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { KartuStockContext } from '../contexts/KartuStockContext';

function KartuStock () {

  const { dataKartuStock } = useContext(KartuStockContext);

  const list = dataKartuStock.map(data => {
    return(
      <li key={data.id}>
          Tanggal: {data.tanggal} - Item: {data.item} - No Nota: {data.noNota} <br/> 
          Keterangan: {data.keterangan} - Masuk: {data.masuk} - 
          Keluar: {data.keluar} - Sisa: {data.sisa} 
          <br/> <Link to={'/kartustok/' + data.item}>Detail</Link>
      </li>
    )
  })

  return(
    <div className="items">
      <ul>
        {list}
      </ul>
    </div>
  )

}

export default KartuStock