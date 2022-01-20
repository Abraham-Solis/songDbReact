import axios from 'axios'

// creating SongAPI - an object with 2 functions to get and post songs to data base *dont forget /api*
const SongAPI = {
  getSongs: async function () {
    const { data: songs } = await axios.get('/api/songs')
    return songs
  },
  createSong: async function (data) {
    const { data: song } = await axios.post('/api/songs', data)
    return song
  }
}

export default SongAPI
