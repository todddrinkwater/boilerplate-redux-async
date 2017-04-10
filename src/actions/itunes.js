import request from 'superagent'

export const receiveArtist = (posts) => {
  let result = {
    type: 'RECEIVE_ARTIST',
    songs: posts.results.map(post => post.trackName)
  }
  console.log("hello", result);
  return result
}

export function fetchArtist (artist) {
  return (dispatch) => {
    request
      .get(`https://itunes.apple.com/search?term=${artist}`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveArtist(res.body))
      })
  }
}
