export const disciplineQuery=(name,start=0,perLimit=12)=>{
    if (perLimit<1){
        perLimit=12;
    }
    const end=start+perLimit;
    const query=`
    {
        "data":*[_type=="discipline" && owner->name match '*${name}*']{
        name,
        _id,
        "topic":owner->name,
        "count": count(*[_type == "lesson" && references(^._id)])
        }| order(count desc) [${start}...${end}] ,
        "count":count(*[_type=="discipline" && owner->name match '*${name}*'])
    
    }
    `;
    return query;
}

export const disciplineDetailsQuery=(id,type_name,start=0,perLimit=12)=>{
    if (perLimit<1){
        perLimit=12;
    }
    const end=start+perLimit;

    const query=`*[_type=="discipline" && _id=="${id}"]{
        name,
        _id,
        "topic":owner->name,
        "count": count(*[_type == "lesson" && references(^._id)]),
        "data":
        *[_type=="lesson" && owner->_id=="${id}" && type->name match "*${type_name}*"]
        {name,
            _id,
            order,
            "type":type->name
        }| order(order) [${start}...${end}] 
            
    }`;
    return query;
}

export const lessonDetailsQuery=(groupId,lessonId)=>{
    const query=`*[_type=="discipline" && _id=="${groupId}"]{
        "data":*[_type=="lesson" && _id=="${lessonId}"]{
        name,
         _id,
          order,
        "type":type->name,
        "topic":owner->name,
        "files":
          *[_type=="fileLesson" && owner->_id=="${lessonId}"]
          {
          "uri":media.asset->url,
          "fileType":media.asset->extension
          }| order(order) 
      }
    }
    `;
    return query;
}
  
export const searchQuery=(searchTerm,start=0,perLimit=12)=>{
    const end=start+perLimit;
    const query=`{
        "data":*[(_type=="discipline" || _type=="lesson")&&(name match "*${searchTerm}*")]{
          _type,_id,name,"owner":owner->name,"type":type->name,order,"groupId":owner->_id,
        }[${start}...${end}],
        "count":count(*[(_type=="discipline" || _type=="lesson")&&(name match "*${searchTerm}*")])
      }
    `;
    return query;
}