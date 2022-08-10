
import { useEffect, useState } from 'react'
import './App.css'
import { AddNewTweet } from './components/addNewTweet'
import { LeftSideBar } from './components/LeftSideBar'



type Tweet = {
  created_at: string
  id: number
  text: string
  user: string
  userHadle: string
  url: string


}


function App() {
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    fetch('http://localhost:3005/tweet')
      .then(resp => resp.json())
      .then(tweetsFromServer => setTweets(tweetsFromServer))


  }, [])


  return (
    <div className="App">


      <LeftSideBar />
      <AddNewTweet />












    </div >
  )
}

export default App

