import React, { useContext, useState } from 'react'
import { RawMaterialContext } from '../contexts/RawMaterialContext';
import { KartuStockContext } from '../contexts/KartuStockContext';

function ItemMasuk (props) {
  const {items} = useContext(RawMaterialContext) 
  const {dataKartuStock, dispatchKartuStock} = useContext(KartuStockContext)
  const [item, setItem] = useState('HPK 200 M')
  const [tanggal, setTanggal] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [masuk, setMasuk] = useState('')
  const [sisaStock] = dataKartuStock.filter(data => data.item === item).slice(-1)
  .map(item=>item.sisa)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchKartuStock({type:'ADD_KARTU_STOCK', data: 
    {item, tanggal, masuk, keluar:'0', keterangan,sisa:sisaStock+parseInt(masuk)} })
    props.history.push('/')
  }
 
  return(
    <div className="datas"> 
      <form onSubmit={handleSubmit}>
        <label htmlFor="Tanggal" > Tanggal:</label>
        <input type="text" id="Tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required/>
        <label htmlFor="tipe">Item:</label>
        <select id="tipe" value={item} onChange={(e) => setItem(e.target.value)}>
          {items.map( item => <option key={item.ITEMNO} value={item.ITEMDESCRIPTION}>{item.ITEMDESCRIPTION}</option> )}
        </select>
        <label htmlFor="keterangan" > Keterangan:</label>
        <input type="text" id="keterangan" value={keterangan} onChange={(e) => setKeterangan(e.target.value)} required/>
        <label htmlFor="nilai" > QTY Masuk:</label>
        <input type="number" id="nilai" value={masuk} onChange={(e) => setMasuk(e.target.value)} required/>
        <br/><input type="submit" value="Tambah" />
      </form>
    </div>
  )

} 

export default ItemMasuk
