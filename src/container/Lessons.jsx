import React, { useEffect, useState } from 'react'
import { disciplineDetailsQuery } from '../utils/data';
import {  useLocation, useParams } from 'react-router-dom';
import { fetchJSON, urlFor } from '../client';
import { perLimit, topicsLessons } from '../utils/constans';
import { TopicMenu ,Lesson, PaginationButton, NotFound} from '../components';

const Lessons = () => {
  const [lessons,setLessons]=useState([]);
  const [info,setInfo]=useState(null);

  const {groupId}=useParams();
  const { search } = useLocation();
  const [checkLoad,setCheckLoad]=useState(true);
  const [loading,setLoading]=useState(false);
  const [isError,setIsError]=useState(false);

  const topic = (new URLSearchParams(search).get('topic')) || "all";

  useEffect(() => {

    const limit=perLimit.lessons;
    const {param}=topicsLessons[topic];
    const query = disciplineDetailsQuery(groupId,param,lessons.length,limit);
    const url=urlFor(query);

    fetchJSON(url).
    then(({result}) => {
      if (result.length!=0){
        const {name,topic,data,count}=result[0];
        setInfo({name,topic});
        setLessons(oldArray => [...oldArray, ...data]);
        setLoading(false);
        setCheckLoad(count>lessons.length+limit);
      }

      setIsError(result.length==0);
      

    });
  },[groupId,topic,loading]);

  if (isError) return (<NotFound/>);

  return (
    <div className="py-12">
          <div className="container px-4 mx-auto">
            {info&&lessons &&(
            <div className="flex flex-wrap xl:items-center -mx-4">
              <div className="w-full px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-indigo-500 uppercase rounded-9xl" >{info.topic}</span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight" >{info.name}</h1>
                
              </div>
              <div className="w-full">
                <div className='mx-auto py-3'>
                  <TopicMenu menu={topicsLessons} setData={setLessons} topic={topic} />
                </div>
                <div className='py-10 sm:py-12'>
                  <div className="lg:px-8">
                    <div>
                      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0 divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100">

                      {lessons.map((lesson)=>(
                        <Lesson key={lesson._id} lesson={lesson} groupId={groupId} _type="lesson"/>
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
            )}


          </div>
        </div>
  )
}

export default Lessons