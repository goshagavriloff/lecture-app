import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { topicsDisciplines,perLimit } from '../utils/constans';
import { disciplineQuery } from '../utils/data';
import { fetchJSON, urlFor } from '../client';
import { TopicMenu,PaginationButton } from '../components';

const Disciplines = () => {

  const [disciplines,setDisciplines]=useState([]);
  const [checkLoad,setCheckLoad]=useState(true);
  const [loading,setLoading]=useState(false);



  const { search } = useLocation();
  const topic = (new URLSearchParams(search).get('topic')) || "all";
  

  useEffect( () => {
    const limit=perLimit.disciplines;
    const {param}=topicsDisciplines[topic];
    const query = disciplineQuery(param,disciplines.length,limit);
    const url=urlFor(query);

    fetchJSON(url).
    then(({result}) => {
      
      setDisciplines(oldArray => [...oldArray, ...result.data]);
      setLoading(false);
      setCheckLoad(result.count>disciplines.length+limit);
      
    })
  },[topic,loading])

  return (
    <div>

      <TopicMenu menu={topicsDisciplines} setData={setDisciplines} topic={topic} />

      <div className="max-w-lg px-4 pt-12 mx-auto md:max-w-screen-2xl md:px-6 xl:px-8 2xl:px-12">
        <div>
          <div id="resources" className="grid mx-auto gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 2xl:gap-x-12 2xl:gap-y-16 xl:gap-y-14">
            
            {disciplines &&disciplines.map(({_id,name,topic})=>(
              <div key={_id}>
              <div>
                <div className="flex flex-col justify-between flex-1 px-6 pt-6 pb-0">
                  <div className="flex-1">
                    <Link className="block group" to={`/lecture-app/${_id}/lessons`}>
                      <div className="flex items-center justify-between">
                        <h3 className="flex items-center text-xl font-bold leading-7 text-gray-900 group-hover:text-indigo-600">{name}</h3>
                        <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-bold font-display bg-indigo-200 text-indigo-800">{topic}</span>
                      </div>
                      <p className="mt-1 text-base font-medium leading-6 text-gray-500"></p>

                    </Link>      
                    </div>
                </div>
              </div>
            </div>
            ))}


          </div>
          <PaginationButton setLoading={setLoading} checkLoad={checkLoad} loading={loading}/>


        </div>
      </div>

    </div>
  )
}

export default Disciplines