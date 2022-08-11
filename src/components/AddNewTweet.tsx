
import { GrImage } from 'react-icons/gr'
import { AiOutlineFileGif } from 'react-icons/ai'
import { MdOutlineSort } from 'react-icons/md'
import { MdTagFaces } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { TweetList } from './TweetList'

export function AddNewTweet() {
    return (
        <main>

            < div className='feed'>
                <div className='feed-header'>
                    <h2>  Home</h2>
                </div>

                <div className="twetbox">
                    <div className="tweetbox-input">
                        <img
                            src='https://www.scotsman.com/webimg/b25lY21zOmE5NTI3YzIwLTM1OWItNDk5OC04Zjg2LTQ1ZmFlY2FlZGI1ODo3OWQ0ZTliNC01YTk3'
                            alt=''
                        />
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault()
                    }}>



                        <textarea name="newTweet" placeholder="What's happening?"

                            required />



                        <div>
                            <a href='#'>
                                <GrImage />
                            </a>
                            <a href="#">
                                <AiOutlineFileGif /></a>
                            <a href='#'>
                                < MdOutlineSort />
                            </a>
                            <a href='#'>
                                < MdTagFaces />
                            </a>
                            <a href='#'>
                                <BsFillBagCheckFill />
                            </a>
                            <a href='#'>
                                < HiOutlineLocationMarker />
                            </a>

                        </div>
                        <button className='tweet-btn'> Tweet</button>

                    </form>



                </div>

            </div>
            < TweetList />

        </main >

    )
}