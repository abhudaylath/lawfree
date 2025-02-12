import React from 'react'
import { TEMPLATE } from '../../_components/templateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
interface PROPS{
  selectedTemplate:TEMPLATE|undefined;
}
function FormSection({selectedTemplate}:PROPS) {
  //console.log(selectedTemplate);
  if(!selectedTemplate){
    return;
  }
  return (
    <div className='p-5 shadow-md border rounded-lg'>
      <Image src={selectedTemplate.icon} alt='icon' height={70} width={70}/>
      <h2 className='font-bold text-2xl mb-2 '>{selectedTemplate.name}</h2>
      <p className='text-sm text-gray-500'>{selectedTemplate.description}</p>
      <form action="">
        {selectedTemplate.form.map((item,index)=>(
          <div key={index}>
            <label>
              {item.label}
            </label>
            {item.type=='text'?
              <Input/>
            :item.type=='textarea'?
              <Textarea/>
            :null}
          </div>
        ))}
      </form>
    </div>
  )
}

export default FormSection