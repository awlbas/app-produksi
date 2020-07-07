import React from 'react'

function BatchTicketDetail (props) {

  const items = props.location.state.items
  const batch = props.location.state.batch

  // console.log(props.location.state)
  
  const list = items.map(data => {
    return (
      <li key={data._id}>
        nama: {data.itemdesc} - qty: {data.qty}
      </li>
    )
  })
  return(
    <div className="datas"> 
      No Batch: {batch.noBatch} Tanggal: {batch.tanggal} - 
      Nama Produk: {batch.produk} - 
      Kuantitas Order: {batch.qtyOrder} KG
      <ul>
        {list}  
      </ul>
    </div>
  )

} 

export default BatchTicketDetail
