import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'  
import { addBatch } from '../store/actions/addBatch'

function BatchTicket(props) {
  const [batches, setBatches] = useState([])
  const [idBatch, setIdBatch] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [namaProduk, setNamaProduk] = useState('');
  const [qtyOrder, setQtyOrder] = useState('');
  
  console.log(batches)
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addBatch({idBatch,tanggal,namaProduk,qtyOrder})
  }
  
  const fetchBatch = async () => {
    fetch("http://localhost:4000/api/batch").then(res=>res.json())
    .then( res => setBatches(res))
  }

  useEffect(() => {
    fetchBatch()
  }, [])

  const list = batches.map(batch => {
    return(
      <li key={batch._id}>
          No Batch: {batch.noBatch} Tanggal: {batch.tanggal} - 
          Nama Produk: {batch.produk} - Kuantitas Order: {batch.qtyOrder} KG  
          <br/> <Link to={'/batchticket/' + batch.noBatch}>Detail</Link>
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

const mapStateToProps = (state) => {
  return {
    batch: state.batch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBatch: (batch) => { dispatch(addBatch(batch)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BatchTicket)
