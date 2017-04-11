import {combineReducers} from 'redux'

import subreddits from './subreddits'
import artist from './artist'

export default combineReducers({
  subreddits,
  artist
})
