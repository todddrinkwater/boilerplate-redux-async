import React from 'react'

import LoadArtist from './LoadArtist'
import SubredditContainer from '../containers/SubredditContainer'

const App = () => (
  <div className='app-container'>
    <LoadArtist />
    <SubredditContainer />
  </div>
)

export default App
