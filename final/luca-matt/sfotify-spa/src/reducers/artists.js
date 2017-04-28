(state, action) => {
  switch(action.type) {
    case 'FETCHED':
       return action.payload.artists
    default:
       return state;
  }
} 