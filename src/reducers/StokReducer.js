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
    default:
      return state;
  }
}