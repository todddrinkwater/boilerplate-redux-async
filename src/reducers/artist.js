function artist (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_ARTIST':
      console.log("test", ...action.songs)
      return [
        ...action.songs
      ]

    default:
      return state
  }
}

export default artist
