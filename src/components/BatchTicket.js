import React, {useContext, useState} from 'react'
import { AirContext } from '../contexts/AirContext';

function BatchTicket() {
  const {datas, dispatch} = useContext(AirContext);
  const [keluar, setKeluar] = useState('');
  const [nama, setNama] = useState('air');
  const items = datas.filter(item => item.nama === nama);
  const sisa = items[items.length-1].sisa;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'DEC_DATA', data: {nama,keluar,sisa}});
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="tipe">Nama:</label>
        <select id="tipe" value={nama} onChange={(e) => setNama(e.target.value)}>
          <option value="air">air</option>
          <option value="JP 24">JP 24</option>
          <option value="PVC 680">PVC 680</option>
          <option value="Bioc P-520">Bioc P-520</option>
        </select>
        <label htmlFor="nilai" >QTY:</label>
        <input type="number" id="nilai" value={keluar} onChange={(e) => setKeluar(e.target.value)} required/>
        <input type="submit" value="Tambah" />
      </form>
    </div>
  )
}

export default BatchTicket
