(state, action) => {
  switch(action.type) {
    case 'FETCHED':
       return action.payload.songs
    default:
       return state;
  }
} 