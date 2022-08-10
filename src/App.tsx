
import { useEffect, useState } from 'react'
import './App.css'
// import { AddNewTweet } from './components/addNewTweet'
import { LeftSideBar } from './components/LeftSideBar'
import { TweetList } from './components/TweetList';



type Tweet = {
  created_at: string
  id: number
  text: string
  user: {
    name: string
    userHadle: string
    profileImage: string
  };
  url: string
  likes: number
};


function App() {



  return (
    <div className="App">


      <LeftSideBar />
      {/* <AddNewTweet /> */}
      <TweetList />
















    </div >
  )
}

export default App

