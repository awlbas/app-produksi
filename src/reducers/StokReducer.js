import uuid from 'uuid/v4';

export const StokReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_DATA':
      return [...state, {
        nama: action.data.nama,
        tanggal: action.data.tanggal, 
        nonota: action.data.nonota,
        keterangan: action.data.keterangan,
        masuk: action.data.masuk,
        sisa: parseInt(action.data.sisa)+parseInt(action.data.masuk),
        id: uuid()}
      ]
    case 'DEC_DATA':
      return [...state, {
        nama: action.data.nama,
        tanggal: action.data.tanggal, 
        nonota: action.data.nonota,
        keterangan: action.data.keterangan,
        masuk: action.data.masuk,
        sisa: parseInt(action.data.sisa)-parseInt(action.data.keluar),
        id: uuid()}
      ]
    case 'ADD_BATCH_TICKET':
      return [...state, {
        idBatch: action.data.idBatch,
        tanggal: action.data.tanggal, 
        namaProduk: action.data.namaProduk,
        qtyOrder: parseInt(action.data.qtyOrder)}
      ]
    case 'ADD_RAW_BATCH':
      return [...state, {
        idItemBatch: state.length+1,
        idBatch:action.data.idBatch,
        noItem:action.data.noItem+1,
        nama: action.data.nama, 
        qty: parseInt(action.data.qty),}
      ]
    case 'ADD_KARTU_STOCK':
      return [...state, {
        id: state.length+1,
        item: action.data.item,
        tanggal:action.data.tanggal,
        noNota: action.data.noNota,
        masuk: parseInt(action.data.masuk),
        keluar: parseInt(action.data.keluar),
        sisa: action.data.sisa,
        keterangan: action.data.keterangan,}
      ]
    default:
      return state;
  }
}