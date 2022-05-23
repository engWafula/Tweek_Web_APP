import React,{useEffect,useState} from 'react'
import { Tweet } from '../typings'
import { useSession } from 'next-auth/react'
import moment from 'moment'
import { Comment} from '../typings'
import {
  UploadIcon,
  HeartIcon,
  ChatAlt2Icon,
  SwitchHorizontalIcon
} from '@heroicons/react/outline'
import { fetchComments } from '../utils/fetchComments'



interface Props {
  tweet: Tweet
}

//@ts-ignore

export default function TweetComponent({ tweet }: Props) {

  const [comments, setComments] = useState<Comment[]>([])
  const [commentBox,setcommentBox] =useState<boolean>(false)
  const [input,setInput]=useState<string>("")
  const {data:session}=useSession()

    const freshComments= async () => {
     
      const comments:Comment[]= await fetchComments(tweet._id)
      setComments(comments)
      
    }

    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    }

    useEffect(()=>{
    
      freshComments()
    },[])

 
  return (
    <div className="flex flex-col space-x-3 border-y p-3">
      <div className="flex space-x-3 border-gray-100">
        <img
          src={tweet.image}
          className="h-10 w-10 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="text-gray hidden text-sm sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()}.
            </p>
            <p>{moment(tweet._createdAt).startOf('seconds').fromNow()}</p>
          </div>
          <p className="pt-1">{tweet.text}</p>
          {tweet.image && (
            <img
              src={tweet.image}
              className=" m-5 ml-0 mb-1 h-auto max-h-60 w-full rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>
      <div className='flex justify-between mt-5'>
        <div onClick={()=>session && setcommentBox(!commentBox)} className='flex items-center space-x-3 cursor-pointer text-gray-400'>
          <ChatAlt2Icon  className='h-5 w-5'/>
          <p>{comments.length}</p>
        </div>
        <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
          <SwitchHorizontalIcon className='h-5 w-5'/>
        </div>
        <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
          <HeartIcon className='h-5 w-5'/>
        </div>
        <div className='flex items-center space-x-3 cursor-pointer text-gray-400'>
          <UploadIcon className='h-5 w-5'/>
        </div>
      </div>
      {
        commentBox && (
          <form   onSubmit={handleSubmit} className='mt-3 flex space-x-2'>
            <input
            value={input}
            onChange={e=>setInput(e.target.value)}
            className='flex flex-1 rounded-lg outline-none  bg-gray-100' type='text' placeholder='Write A Comment'></input>
            <button  
            type='submit'
           
            disabled={!input} className='text-twitter
              disabled:text-gray-200 '>Comment</button>
          </form>
        )
      }
      {
        comments?.length>0 && (
          <div className='my-2 mt-5 m-h-44 space-y-5  overflow-y-scroll border-t border-gray-100 p-5'>
            {comments.map((comment:Comment)=>(
               <div className="flex space-x-2 relative" key={comment._id}>
                 <hr className=' absolute left-5 top-10 h-8 border-x border-twitter/30'/>
                <img src={comment.profileImg} className="mt-2 w-7 h-7 object-cover" alt=""/>
                <div>
                  <div className='flex items-center space-x-1'>
                    <p className='m-r font-bold'>{comment.username}</p>
                    <p className='text-gray-500 hidden text-sm sm:inline '>@{comment.username.replace(/\s+/g, '').toLowerCase()}.</p>
                    <p>{moment(comment._createdAt).startOf("seconds").fromNow()}</p>
                  </div>
                  <p>{comment.comment}</p> 
                </div>
            
              </div>
            ))}
          </div>  
        )
      }
    </div>
  )
}
