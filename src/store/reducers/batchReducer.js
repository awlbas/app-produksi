const rootReducer = (state = [], action) => {
  // console.log(action.batch)
  // console.log(state)
  switch(action.type){
    case 'FETCH_BATCH':
      return action.batch
    default:
    return state
  }
}

export default rootReducer