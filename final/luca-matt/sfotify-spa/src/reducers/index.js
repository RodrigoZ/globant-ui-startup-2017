import songs from './songs';
import artists from './artists';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  songs,
  artists
})