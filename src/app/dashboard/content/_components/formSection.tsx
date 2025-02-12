import React from 'react'
import { TEMPLATE } from '../../_components/templateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
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
      <form action="" className='mt-6'>
        {selectedTemplate.form.map((item,index)=>(
          <div key={index} className='my-2 flex flex-col gap-2 mb-7'>
            <label className='font-bold '>
              {item.label}
            </label>
            {item.type=='text'?
              <Input/>
            :item.type=='textarea'?
              <Textarea/>
            :null}
          </div>
        ))}
        <Button className='w-full p-5 bg-blue-500 hover:bg-blue-700'>Generate Content</Button>
      </form>
    </div>
  )
}

export default FormSection