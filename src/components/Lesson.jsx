import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Lesson = ({groupId,lesson,_type}) => {
  const [url,setUrl]=useState("");
  const [caption,setCaption]=useState("");
  useEffect(()=>{
    if (_type=="lesson"){
      setUrl(`/lecture-app/${groupId}/lessons/${lesson._id}`);
      setCaption(`Занятие #${lesson.order}`);
    }
    if (_type=="discipline"){
      setUrl(`/lecture-app/${lesson._id}/lessons`);
      setCaption('Дисциплина');
      lesson.type=lesson.owner;
    }
  },[groupId,lesson,_type]);

  return (
    <div className="mx-auto lg:max-w-4xl">
    <div className="flex flex-col items-start py-10 sm:py-12">
          <h2 className="mt-2 text-xl text-slate-900">
      <Link to={url} >
        {lesson.name}
      </Link>
      </h2>
      <div className="order-first">
      <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-indigo-500 uppercase rounded-9xl" >{caption}</span>
      <span className="px-2 font-mono text-sm leading-7 text-slate-500">{lesson.type}</span>

      </div>
      <div className="mt-4 flex items-center gap-4">

      <Link to={url} className='flex items-center gap-x-3 text-sm font-bold leading-6 text-indigo-500 hover:text-indigo-700 active:text-indigo-900'>
          <svg aria-hidden="true" viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-current"><path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path></svg>
          <span aria-hidden="true">Открыть</span>
        </Link>

      </div>

    </div>
  </div>
  )
}

export default Lesson