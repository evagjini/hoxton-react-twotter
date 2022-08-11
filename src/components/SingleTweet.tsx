import { useEffect, useState } from "react";
import { Tweet, TweetList } from "./TweetList";

export type Props = {
    tweet: Tweet;
};

export function SingleTweet({ tweet }: Props) {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        fetch("http://localhost:3005/tweets")
            .then((resp) => resp.json())
            .then((tweetsFromServer) => setTweets(tweetsFromServer));
    }, []);
    return (
        <li className="tweets">
            <img className="profile-image" src={tweet.user.profileImage} />
            <span className="user-info">{tweet.user.name}</span>
            <span className="user-info">{tweet.user.userHandle}</span>
            <p>{tweet.text}</p>

            <div>
                <img className="avatar-image" src={tweet.image} alt="" width={200} />
            </div>
            <span className="likes">{tweet.likes}</span>
            <button
                className="likes-button"
                onClick={() => {
                    // we make a copy of a tweet
                    let tweetCopy = structuredClone(tweets);

                    // then we a find the new one

                    let match = tweetCopy.find((target) => target.id === tweet.id);
                    match.likes++;

                    setTweets(tweetCopy);
                }}
            >
                {" "}
                ❤️
            </button>
        </li>
    );
}

function setTweets(tweetCopy: any) {
    throw new Error("Function not implemented.");
}
