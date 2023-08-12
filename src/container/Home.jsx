import React, { useState } from 'react'
import Lessons from './Lessons';
import {Disciplines} from './index';
import { Route, Routes } from 'react-router-dom';
import {Search,SearchInput,LessonDetail} from '../components';

const Home = () => {

  const [searchTerm,setSearchTerm]=useState('');

  return (

      <div className="">
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <Routes>
          <Route path='/*' element={<Disciplines />}></Route>
          <Route path='/:groupId/lessons/' element={<Lessons />}></Route>
          <Route path='/:groupId/lessons/:lessonId' element={<LessonDetail />}></Route>
          <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>}/>

        </Routes>
        
      </div>

      
  )
}

export default Home