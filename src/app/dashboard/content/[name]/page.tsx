"use client";
import React, { use, useState } from "react";
import FormSection from "../_components/formSection";
import OutputSection from "../_components/outputSection";
import { TEMPLATE } from "../../_components/templateListSection";
import legalAiServices from "@/app/(data)/template";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { chatSession } from "../../../../../utils/AiModal";
import { db } from "../../../../../utils/db";
import { AIOutput } from "../../../../../utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment"
interface Props {
    params: Promise<{ name: string }>;
}

function CreateNewContent({ params }: Props) {
    const { name } = use(params);
    const selectedTemplate: TEMPLATE | undefined = legalAiServices.find(
        (item) => item.slug === name
    );
    if(!selectedTemplate){
        console.log('template with this slug does not exists');
        
    }
    const {user} = useUser();
    const [loading,setLoading] = useState(false);
    const [aiOutput,setAioutput] = useState<string>();
    const GenerateAIContent=async (FormData: object)=>{
        //console.log(typeof FormData);
        setLoading(true)
        const selectedPrompt = selectedTemplate?.aiPrompt;
        const finalPropmt = JSON.stringify(FormData)+' '+selectedPrompt;
        const result = await chatSession.sendMessage(finalPropmt)
        //console.log(result.response.text());
        setAioutput(result.response.text())
        saveInDb(FormData,selectedTemplate?.slug,result.response.text())
        setLoading(false)
    }

    const saveInDb = async (formData:object,slug:string|undefined,aiResponse:string)=>{
        if (!slug || !aiResponse) {
            console.error("Missing slug or AI response");
            return;
        }
        const result = await db.insert(AIOutput).values({
            formData:JSON.stringify(formData),
            temptateSlug:slug,
            aiResponse:aiResponse,
            createdBy:user?.primaryEmailAddress?.emailAddress,
            createdAt:moment().format('DD/MM/yyyy')
        })
        console.log(result);
        
    }

    return (
        <div className="p-5">
            <Link href={'/dashboard'}>
                <Button className="bg-blue-500 hover:bg-blue-700"><ArrowLeft/> Back</Button>
            </Link>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
                <FormSection
                    userFormInput={(data: Record<string, string>) => {
                        GenerateAIContent(data);
                    }}
                    selectedTemplate={selectedTemplate}
                    loading={loading}
                />
                <div className="col-span-2">
                    <OutputSection aiOutput={aiOutput}/>
                </div>
            </div>
        </div>
    );
}

export default CreateNewContent;
