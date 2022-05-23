// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sanityClient} from '../../sanity';
import {Comment} from '../../typings';
import {groq} from "next-sanity"

const commentQuery = groq`
*[_type=="comment" ]{
    _id,
    "tweet": *[_type=='tweet' && references(^._id==$tweetId)]{ 
      _id,
      ...
    },
    ...
  }
`

type Data = Comment[]

export default  async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const {tweetId} = req.query;
    const comments:Comment[] = await sanityClient.fetch(commentQuery,{
        tweetId
    })

    
  res.status(200).json(comments )
}
