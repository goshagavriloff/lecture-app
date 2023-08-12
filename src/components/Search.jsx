import React, { useEffect, useState } from 'react'
import Lesson from './Lesson'
import { searchQuery } from '../utils/data';
import { fetchJSON, urlFor } from '../client';
import PaginationButton from './PaginationButton';
import { perLimit } from '../utils/constans';

const Search = ({searchTerm,  setSearchTerm}) => {
  const [lessons,setLessons]=useState([]);
  const [checkLoad,setCheckLoad]=useState(true);
  const [loading,setLoading]=useState(false);
  const [counted,setCounted]=useState(0);
  
  useEffect( () => {
    const limit=perLimit.lessons;
    const query = searchQuery(searchTerm,lessons.length,limit);
    const url=urlFor(query);

    fetchJSON(url).
    then(({result}) => {
      if (result!=null){
        const {data,count}=result;
        setLessons(oldArray => [...oldArray, ...data]);
        setLoading(false);
        setCheckLoad(count>lessons.length+limit);
        setCounted(count);
      }


    });
  },[loading,searchTerm])

  return (
        <div className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap xl:items-center -mx-4">
              <div className="w-full px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-indigo-500 uppercase rounded-9xl" >Поиск</span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight" >Количество результатов: {counted}</h1>
                
              </div>
              <div className="w-full">
                <div className='py-10 sm:py-12'>
                  <div className="lg:px-8">
                    <div>
                      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">

                      {lessons.map((lesson)=>(
                        <Lesson key={lesson._id} lesson={lesson} groupId={lesson.groupId} _type={lesson._type}/>
                      ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="mx-auto">
              <PaginationButton setLoading={setLoading} checkLoad={checkLoad} loading={loading}/>

              </div>

            </div>
          </div>
        </div>
  )
}

export default Search