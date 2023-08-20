import React from "react";

export const topicsDisciplines ={
    "all":{
        item:"Все",
        param:""
    },
    "isp":{
        item:"ИСП",
        param:"ИСП"
    },
    "pi":{
        item:"ПИ",
        param:"ПИ"
    },
    "ksk":{
        item:"КСК",
        param:"КСК"
    },
    "vyz":{
        item:"ВУЗ",
        param:"ВУЗ"
    }
};

export const topicsLessons ={
    "all":{
        item:"Все",
        param:""
    },
    "lectures":{
        item:"Лекция",
        param:"Лекция"
    },
    "practica":{
        item:"Практика",
        param:"Практическая работа"
    },
    "uch_practica":{
        item:"УП",
        param:"Учебная практика"
    },
    "contest":{
        item:"Контест",
        param:"Контест"
    }
};
export const perLimit={
    "disciplines":12,
    "lessons":8
};

export const ZipRenderer = ({
  mainState: { currentDocument },
}) => {
  if (!currentDocument) return null;

  return (
    <div id="my-zip-renderer">
      <a id="zip-img" href={currentDocument.fileData} className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-5 my-5">Ссылка на архив {currentDocument.fileName}</a>
    </div>
  );
};

ZipRenderer.fileTypes = ["zip"];
ZipRenderer.weight = 1;
