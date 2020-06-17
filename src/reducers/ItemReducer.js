import uuid from 'uuid/v4';

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, {
        nama: action.item.nama, 
        total: action.item.total,
        id: uuid()}
      ]
    case 'REMOVE_ITEM':
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}