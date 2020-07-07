const init = {
  item:[]
}

const itemReducer = (state = init, action) => {
  // console.log(action)
  // console.log(state)
  switch(action.type){
    case 'FETCH_ITEMS':
      return {
        ...state.item,
        item: action.item
      } 
    default:
    return state
  }
}

export default itemReducer