import React, {useContext, useState} from 'react'
import { RawMaterialContext } from '../../contexts/RawMaterialContext';
import { BatchTicketContext } from '../../contexts/BatchTicketContext';
import { ItemBatchContext } from '../../contexts/ItemBatchContext';
import { KartuStockContext } from '../../contexts/KartuStockContext';

function BatchTicket(props) {
  const {items} = useContext(RawMaterialContext)
  const {dataBatch} = useContext(BatchTicketContext)
  const {dataItem, dispatch} = useContext(ItemBatchContext)  
  const {dataKartuStock, dispatchKartuStock} = useContext(KartuStockContext)
  const idBatch = props.location.state
  // const idBatch = "11"
  const itemBatch = dataItem.filter(item => item.idBatch === idBatch)
  const [batch] = dataBatch.filter(item => item.idBatch === idBatch)
  const [nama, setNama] = useState('HPK 200 M')
  const [qty, setQty] = useState('')
  const [sisaStock] = dataKartuStock.filter((item) => item.item === nama).slice(-1)
  .map(item=>item.sisa)

  // console.log(dataKartuStock.filter((item) => item.item === nama).slice(-1))

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'ADD_RAW_BATCH', data: 
    {idBatch,noItem:itemBatch.length,nama,qty} });
    
    dispatchKartuStock({type:'ADD_KARTU_STOCK', data: 
    {item:nama, tanggal:batch.tanggal, noNota:batch.namaProduk, masuk:0,
    keluar:qty, keterangan:'Produksi '+batch.namaProduk, sisa:sisaStock-qty } })
  }

  const list = itemBatch.map(data => {
    return (
      <li key={data.noItem}>
        nama: {data.nama} - qty: {data.qty}
      </li>
    )
  })

  const batchTicket = ` 
    No Batch: ${batch.idBatch} Tanggal: ${batch.tanggal} - 
    Nama Produk: ${batch.namaProduk} - 
    Kuantitas Order: ${batch.qtyOrder} KG
  `
  return (
    <div>
      {batchTicket}
      <ul>
        {list}
      </ul>

      <form onSubmit={handleSubmit}>
        <label htmlFor="tipe">Nama:</label>
        <select id="tipe" value={nama} onChange={(e) => setNama(e.target.value)}>
          {items.map( item => <option key={item.ITEMNO} value={item.ITEMDESCRIPTION}>{item.ITEMDESCRIPTION}</option> )}
        </select>
        <label htmlFor="nilai" > QTY:</label>
        <input type="number" id="nilai" value={qty} onChange={(e) => setQty(e.target.value)} required/>
        <br/><input type="submit" value="Tambah" />
      </form>
    </div>
  )
}

export default BatchTicket
