import React, { useEffect, useState } from 'react'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import { lessonDetailsQuery } from '../utils/data';
import { useParams } from 'react-router-dom';
import { fetchJSON, urlFor } from '../client';
import NotFound from './NotFound';

const LessonDetail = () => {
  const {groupId,lessonId}=useParams();
  const [lesson,setLesson]=useState(null);
  const [docs,setDocs]=useState([]);
  const [isError,setIsError]=useState(false);
  const [activeDocument, setActiveDocument] = useState(null);

  const handleDocumentChange = (document) => {
    setActiveDocument(document);
  };

  useEffect(()=>{
    const query = lessonDetailsQuery(groupId,lessonId);
    const url=urlFor(query);

    fetchJSON(url).then(({result})=>{
      let error=true;
      if (result.length!=0){
        const {data}=result[0];

        if (data.length!=0){
          const {type,topic,files,name}=data[0];
          setLesson({type,topic,files,name});
          setDocs(files);
          setActiveDocument(files[0]);
          error=false;
        }
      }
      setIsError(error);
    });
  },[groupId,lessonId]);

  if (isError) return (<NotFound/>);
  return (
    <div className="py-12">
      <div className="container px-4 msx-auto">
        {lesson && (
          <div className="flex flex-wrap xl:items-center mx-4">
              <div className="w-full px-4 mb-16 md:mb-0">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-indigo-500 uppercase rounded-9xl" >{lesson.type}</span>
                <h1 className="mb-6 text-2xl md:text-3xl lg:text-4xl leading-tight font-bold tracking-tight" >{lesson.name}</h1>
                
              </div>

              <div className="w-full">
              <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{height:600}}
                      activeDocument={activeDocument}
                      onDocumentChange={handleDocumentChange}
                      />
              </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default LessonDetail