export const fetchBatch = () => {
  // console.log('fetchBatch')
  return (dispatch) => {
    fetch("http://localhost:4000/api/batch").then(res=>res.json())
    .then( batch => dispatch({type: 'FETCH_BATCH', batch}) )
  }
}

export const addBatch = (batchTicket) => {
  return {
    type:'ADD_BATCH',
    batchTicket
  }
}
