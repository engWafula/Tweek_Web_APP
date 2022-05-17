import React,{useState} from 'react'
import {
     CalendarIcon,
     EmojiHappyIcon,
     LocationMarkerIcon,
     PhotographIcon,
     SearchCircleIcon
     } from '@heroicons/react/outline'


export default function Tweetbox() {

    const [input,setInput]=useState<string>('')
  return (
    <div className='flex space-x-2 p-5'>
           <img className="m-3 mt-4 h-14 w-14 rounded-full object-cover" src="https://links.papareact.com/gll" alt=""/>
    <div className='flex flex-1 items-center pl-2'>
        <form className='flex fex-1 flex-col'>
            <input type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            className='h-24 w-full outline-none text-xl placeholder:text-xl' placeholder="What's happening"/>
            <div className='flex items-center '>
                <div className='flex space-x-2 text-twitter flex-1'>
                    <PhotographIcon className='h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150'/>  
                 <SearchCircleIcon className='h-5 w-5'/>
                 <EmojiHappyIcon className='h-5 w-5'/>
                 <CalendarIcon className='h-5 w-5'/>
                 <LocationMarkerIcon className='h-5 w-5'/>
                </div>
               <button 
               disabled={!input}
               className='bg-twitter px-5 py-2 rounded-full font-bold text-white disabled:opacity-30'>Tweet</button>
            </div>
        </form>
    </div>
    </div>
  )
}
