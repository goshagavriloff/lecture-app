import React from 'react'
import { Link } from 'react-router-dom';

const TopicMenu = ({menu,setData,topic}) => {
    const activeTopicStyle = "bg-white border-gray-200 shadow-sm flex justify-center relative w-1/3 rounded-lg py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cool-indigo-400 focus:z-10 sm:w-1/3 sm:px-8";
    const topicStyle = "border-transparent hover:text-gray-900 ml-0.5 flex justify-center relative w-1/3 rounded-lg py-2 text-sm font-medium text-gray-700 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-cool-indigo-300 focus:z-10 sm:w-1/3 sm:px-8";


  return (
          <div className="flex flex-row flex-wrap items-center justify-center">


        <div className="order-last w-full pt-4 mt-4 border-t border-gray-200 sm:flex sm:flex-col sm:align-center">
          <div className="relative self-center bg-gray-100 rounded-lg p-0.5 flex">
            {Object.entries(menu).map(([key,{item}]) => (
              <Link key={`menu_${key}`} 
                    className={topic === key ? activeTopicStyle : topicStyle} 
                    to={`?topic=${key}`} 
                    onClick={()=>{
                      topic != key&&setData([])
                      }}>
              {item}
              </Link>
            ))}
          </div>
        </div>


      </div>
  )
}

export default TopicMenu