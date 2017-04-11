import request from 'superagent'

export const receiveArtist = (posts) => {
  console.log("hello", posts)
  let result = {
    type: 'RECEIVE_ARTIST',
    songs: posts.map(post => post.trackName)
  }
  return result
}

export function fetchArtist (artist) {
  return (dispatch) => {
    request
      .get(`http://localhost:3000`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        console.log(res);
        dispatch(receiveArtist(JSON.parse(res.text).results))
      })
  }
}
