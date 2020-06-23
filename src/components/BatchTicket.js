import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { BatchTicketContext } from '../contexts/BatchTicketContext';

function BatchTicket(props) {
  const {dataBatch, dispatchBatch} = useContext(BatchTicketContext)
  const [idBatch, setIdBatch] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [namaProduk, setNamaProduk] = useState('');
  const [qtyOrder, setQtyOrder] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchBatch({type:'ADD_BATCH_TICKET', 
    data: {idBatch,tanggal,namaProduk,qtyOrder}});
    props.history.push('formbatchitem', idBatch)
  }

  const list = dataBatch.map(item => {
    return(
      <li key={item.idBatch}>
          No Batch: {item.idBatch} Tanggal: {item.tanggal} - 
          Nama Produk: {item.namaProduk} - Kuantitas Order: {item.qtyOrder} KG  
          <br/> <Link to={'/batchticket/' + item.idBatch}>Detail</Link>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {list}
      </ul>
        <form onSubmit={handleSubmit}>
          <label htmlFor="idbatch ">No Batch:</label>
          <input type="text" id="idbatch" value={idBatch} onChange={(e) => setIdBatch(e.target.value)} required/>
          <label htmlFor="tanggal">Tanggal:</label>
          <input type="text" id="tanggal" value={tanggal} onChange={(e) => setTanggal(e.target.value)} required/>
          <label htmlFor="kode">Nama Produk:</label>
          <input type="text" id="kode" value={namaProduk} onChange={(e) => setNamaProduk(e.target.value)} required/>
          <label htmlFor="qty" >QTY Order:</label>
          <input type="text" id="qty" value={qtyOrder} onChange={(e) => setQtyOrder(e.target.value)} required/>
          <br/><input type="submit" value="Tambah" />
        </form>
    </div>
  )
}

export default BatchTicket
