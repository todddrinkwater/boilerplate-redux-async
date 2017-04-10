import React from 'react'
import {connect} from 'react-redux'
import {fetchArtist} from '../actions/itunes'

let LoadArtist = ({dispatch}) => (
  <button
    onClick={() => dispatch(fetchArtist('jack+johnson'))}
    >Fetch Artist</button>
)

LoadArtist = connect()(LoadArtist)

export default LoadArtist
