import legalAiServices from "@/app/(data)/template";
import ServiceCard from "./serviceCard";
import { useEffect, useState } from "react";

export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: string;
  slug: string;
  form: {
    label: string;
    type: string;
    placeholder: string;
  }[];
  aiPrompt: string;
}


function TemplateListSection({userSearchInput}:{userSearchInput:string}) {
  const [templateList,setTemplateList] = useState(legalAiServices);
  useEffect(()=>{
    //console.log(userSearchInput);
    if(userSearchInput){
      const filterData = legalAiServices.filter((item)=>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      )
      setTemplateList(filterData)
    }else{
      setTemplateList(legalAiServices);
    }
  },[userSearchInput])
  
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Available Services
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {templateList.map((item: TEMPLATE, index: number) => (
          <ServiceCard 
            key={index}
            name={item.name}
            description={item.description}
            icon={item.icon}
            slug={item.slug}
          />
        ))}
      </div>
    </div>
  );
}

export default TemplateListSection;
