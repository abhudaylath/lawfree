import React from 'react'
import FormSection from '../_components/formSection'
import OutputSection from '../_components/outputSection'
import { TEMPLATE } from '../../_components/templateListSection'
import legalAiServices from '@/app/(data)/template'

interface PROPS{
    params:{
        'name':string
    }
}

function CreateNewContent(props:PROPS) {

    const selectedTemplate: TEMPLATE | undefined = legalAiServices.find(
        (item) => item.slug === props.params.name
    );
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 p-5'>
            <FormSection selectedTemplate={selectedTemplate}/>
            <OutputSection/>
        </div>
    )
}

export default CreateNewContent