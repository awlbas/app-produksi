import React, { useContext } from 'react'
import { ItemBatchContext } from '../contexts/ItemBatchContext';
import { BatchTicketContext } from '../contexts/BatchTicketContext';

function BatchTicketDetail (props) {
  const {dataItem} = useContext(ItemBatchContext)
  const {dataBatch} = useContext(BatchTicketContext)
  const idBatch = props.match.params.id_batch;
  const itemBatch = dataItem.filter(item => item.idBatch === idBatch);
  const [batch] = dataBatch.filter(item => item.idBatch === idBatch);
  
  const list = itemBatch.map(data => {
    return (
      <li key={data.noItem}>
        nama: {data.nama} - qty: {data.qty}
      </li>
    )
  })
  return(
    <div className="datas"> 
      No Batch: {batch.idBatch} Tanggal: {batch.tanggal} - 
      Nama Produk: {batch.namaProduk} - 
      Kuantitas Order: {batch.qtyOrder} KG
      <ul>
        {list}  
      </ul>
    </div>
  )

} 

export default BatchTicketDetail
