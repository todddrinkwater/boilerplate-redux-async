function artist (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ARTIST':
      return [
        ...action.songs
      ]

    default:
      return state
  }
}

export default artist
