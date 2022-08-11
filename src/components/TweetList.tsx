import { useEffect, useState } from "react";
import { SingleTweet } from "./SingleTweet";

export type Tweet = {
    id: number;
    text: string;
    user: {
        name: string;
        userHandle: string;
        profileImage: string;
    };
    image: string;
    likes: number;
};

export function TweetList() {
    const [tweets, setTweets] = useState<Tweet[]>([]);

    useEffect(() => {
        fetch("http://localhost:3005/tweets")
            .then((resp) => resp.json())
            .then((tweetsFromServer) => setTweets(tweetsFromServer));
    }, []);
    return (
        <div className="tweet">
            {tweets.map((tweet) => (
                <SingleTweet key={tweet.id} tweet={tweet} />
            ))}
        </div>
    );
}
