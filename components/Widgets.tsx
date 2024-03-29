import { SearchIcon } from '@heroicons/react/outline'
import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'


export default function Widgets() {
  return (
    <div className='px-2 mt-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2'>
            <SearchIcon className="w-8 h-8 text-gray-500"/>
            <input type="text" placeholder='Search' className='bg-transparent flex-1 outline-none'/>
        </div>

        <TwitterTimelineEmbed
        sourceType='profile'
        screenName='wafula_ug'
        options={{height: 1000}}
        />
    </div>
  )
}
