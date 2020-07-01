import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

function KartuStock (props) {
  const dataKartuStock = props.data

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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
    // untuk mengembalikan data sesuai dengan id
    // state.data.find( data => data.id === id)
  }
}

export default connect(mapStateToProps)(KartuStock)