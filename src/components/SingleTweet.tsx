import { Tweet, TweetList } from "./TweetList"

export type Props = {
    tweet: Tweet

}

export function SingleTweet({ tweet }: Props) {
    return (
        <li>
            <img
                className="profile-image"
                src={tweet.user.profileImage} />
            <span className="user-info">{tweet.user.name}</span>
            <span className="user-info">{tweet.user.userHandle}</span>
            <p>{tweet.text}</p>

            <div>
                <img className="avatar-image"
                    src={tweet.image}
                    alt=""
                    width={200} />
            </div>
            <span className="likes">{tweet.likes}</span>
            <button className="likes-button"> ❤️</button>
        </li>

    )
}