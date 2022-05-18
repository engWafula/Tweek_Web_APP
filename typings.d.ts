export interface Tweet extends TweetBody{
    _id: string
    _createdAt: string
    _updatedAT: string
    _rev: string
    _type: 'tweet'
    blockTweet: boolean
}

export const TweetBody = {
    text: string,
    username: string,
    profileImg: string,
    image?:string
}