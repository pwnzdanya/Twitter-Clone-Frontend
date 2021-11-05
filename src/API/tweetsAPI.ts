import axios from "axios"


export const tweetsApi = {
  async fetchTweets() {
    return await axios.get('/tweets')
  },
  async createTweet(text: string) {
    const newTweet = {
      _id: Date.now().toString() ,
      text,
      user: {
        fullName: 'testFullName',
        username:'testUserName',
        avatarUrl: 'https://picsum.photos/200/300'
      }
    }
    return await axios.post('/tweets', newTweet)
  }
}