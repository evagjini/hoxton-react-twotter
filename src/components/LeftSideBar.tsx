import { RiHomeHeartFill } from 'react-icons/ri'
import { FaHashtag } from 'react-icons/fa'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { BiEnvelope } from 'react-icons/bi'
import { FaRegBookmark } from 'react-icons/fa'
import { CgPlayListSearch } from 'react-icons/cg'
import { CgProfile } from 'react-icons/cg'
import { CgMoreO } from 'react-icons/cg'


export function LeftSideBar() {
    return (
        <div className="left-side">
            <div className="left-side-links">
                <ul className="left-side-list">
                    <li>
                        <a href="#">
                            <img className="twett-logo" src="./src/images/logo.png" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <RiHomeHeartFill />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            < FaHashtag /> Explore</a>
                    </li>
                    <li>
                        <a href="#">
                            < IoMdNotificationsOutline /> Notification</a>
                    </li>
                    <li>
                        <a href="#">
                            < BiEnvelope />  Mesagges</a>
                    </li>
                    <li>
                        <a href="#">
                            < FaRegBookmark />  Bookmarks</a>
                    </li>
                    <li>
                        <a href="#">
                            < CgPlayListSearch />  Lists </a>
                    </li>
                    <li>
                        <a href="#">
                            < CgProfile />  Profile </a>
                    </li>
                    <li>
                        <a href="#">
                            < CgMoreO />  More </a>
                    </li>
                    <li>
                        <button className='tweet-btn'> Tweet</button>
                    </li>


                </ul>
            </div>
        </div>
    );
}
