"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { TEMPLATE } from "../../_components/templateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  selectedTemplate: TEMPLATE | undefined;
  userFormInput: (data: FormData) => void;
}

interface FormData {
  [key: string]: string;
}


function FormSection({ selectedTemplate, userFormInput }: Props) {
  const [formData, setFormData] = useState<FormData>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
    setFormData({}); // Reset form after submission
  };

  if (!selectedTemplate) {
    return null;
  }

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      <Image src={selectedTemplate.icon} alt="icon" height={70} width={70} />
      <h2 className="font-bold text-2xl mb-2">{selectedTemplate.name}</h2>
      <p className="text-sm text-gray-500">{selectedTemplate.description}</p>

      <form className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate.form.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.type === "text" ? (
              <Input
                name={item.label}
                value={formData[item.label] || ""}
                required
                onChange={handleInputChange}
              />
            ) : item.type === "textarea" ? (
              <Textarea
                name={item.label}
                value={formData[item.label] || ""}
                required
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full p-5 bg-blue-500 hover:bg-blue-700">
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
