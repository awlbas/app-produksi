import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchBatch } from '../../store/actions/batchAction'

function ListBatchTicket() {
  
  const batches = useSelector(state => {
    // console.log(state.batchReducer)
    return (state.batchReducer)})
  const dispatch = useDispatch()

  useEffect(() => {
    // console.log('useEffect')
    dispatch(fetchBatch())
  }, [dispatch])

  // console.log(batches)
  
  const list = batches.map(batch => {
    return(
      <li key={batch._id}>
          No Batch: {batch.noBatch} Tanggal: {batch.tanggal} - 
          Nama Produk: {batch.produk} - Kuantitas Order: {batch.qtyOrder} KG  
          <br/> <Link to={{
            pathname: '/batchticket/' + batch.noBatch,
            state: {
              items: batch.items,
              batch: {
                noBatch: batch.noBatch,
                tanggal: batch.tanggal,
                produk: batch.produk,
                qtyOrder: batch.qtyOrder
              }
            }
          }}>Detail</Link>
      </li>
    )
  })

  return (
    <div>
      {list}<br/>
      <Link to={'/addbatch'}>tambah batchticket</Link>
    </div>
  )
}

export default ListBatchTicket
