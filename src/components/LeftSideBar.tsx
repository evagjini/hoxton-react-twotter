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
                    < div className='account-tag'>
                        <img className="profile-image"
                            src="https://www.scotsman.com/webimg/b25lY21zOmE5NTI3YzIwLTM1OWItNDk5OC04Zjg2LTQ1ZmFlY2FlZGI1ODo3OWQ0ZTliNC01YTk3LTRmNDEtOWZjMy0xMDFjOGFmN2FjOWI=.jpg?width=640&quality=65&smart&enable=upscale" />
                        <div className='left-side-profile'>
                            <h2 className='profile-name'>Eva </h2>
                            <h3 className='user-handle'>@Eva</h3>
                        </div>
                    </div>


                </ul>
            </div>
        </div>
    );
}
