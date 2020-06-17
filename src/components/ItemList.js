import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AirContext } from '../contexts/AirContext';

function ItemList () {
  const { datas } = useContext(AirContext)
  
  // console.log(datas.map(data => data.nama));
  const air = datas.filter(item => item.nama === 'air');
  const jp24 = datas.filter(item => item.nama === 'JP 24');
  const pvc680 = datas.filter(item => item.nama === 'PVC 680');
  const biocp520 = datas.filter(item => item.nama === 'Bioc P-520');
  
  const items = [air[air.length-1],jp24[jp24.length-1],
    pvc680[pvc680.length-1],biocp520[biocp520.length-1]];
  
  const list = items.map(item => {
    return(
      <div key={item.id}>
        Nama: {item.nama} - Total: {item.sisa} KG -
        <Link to={'/kartustok/' + item.nama}> Kartu Stok</Link>
      </div>
    )
  })
  return(
    <div className="items">
      {list}
    </div>
  )

}

export default ItemList