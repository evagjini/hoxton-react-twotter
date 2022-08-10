
import { GrImage } from 'react-icons/gr'
import { AiOutlineFileGif } from 'react-icons/ai'
import { MdOutlineSort } from 'react-icons/md'
import { MdTagFaces } from 'react-icons/md'
import { BsFillBagCheckFill } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

export function AddNewTweet() {
    return (
        <main>
            <form>
                < div className='add-new-tweet'>
                    <h2 className='main-home-title'>
                        Home</h2>
                    <textarea
                        name="addNewTweet"
                        placeholder="What's happening?" />
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


                </div>
            </form >
        </main >
    )
}