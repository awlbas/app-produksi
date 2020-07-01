const initState = {
    data:[
        {id:1, item: 'HPK 200 M', tanggal:'01-01-2021', noNota:'gls 306', masuk:1000, keluar:0, sisa:1000, keterangan:'Stock Awal'},
        {id:2, item: 'HPK 200 M', tanggal:'02-02-2021', noNota:'gls 307', masuk:0, keluar:400, sisa:600, keterangan:'produksi gls 307'},
    ],
    batchTicket:[
        {idBatch:'11', tanggal:'01-01-2021', namaProduk:'gls 306', qtyOrder:'100'},
        {idBatch:'12', tanggal:'02-02-2021', namaProduk:'gls 307', qtyOrder:'110'},
    ]
}

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case 'ADD_BATCH_TICKET':
      return {
        data:state.data,
        batchTicket:[...state.batchTicket, action.batchTicket]
      } 
    default:
    return state
  }
}

export default rootReducer