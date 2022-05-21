export interface Tweet extends TweetBody{
    _id: string
    _createdAt: string
    _updatedAT: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
    image: string
    username: string
    text: string
}

export const TweetBody = {
    text: string,
    username: string,
    profileImg: string,
    image?:string
}

export const CommentBody={
comment: string,
tweetId: string,
username: string,
profileImg: string
}


export interface Comment extends CommentBody{
    _id: string
    _createdAt: string
    _updatedAT: string
    _rev: string
    _type: 'comment'
    profileImg: string
    username: string
    comment: string
    tweet:{
        _ref: string
        type:"reference"
    }
}