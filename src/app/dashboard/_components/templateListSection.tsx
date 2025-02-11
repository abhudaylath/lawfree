import legalAiServices from "@/app/(data)/template";
import React from "react";
import ServiceCard from "./serviceCard";

export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: string; // Should be a valid image URL
}

function TemplateListSection() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
        Available Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {legalAiServices.map((item: TEMPLATE, index: number) => (
          <ServiceCard 
            key={index}
            name={item.name}
            description={item.description}
            icon={item.icon} // Ensure this is a valid image URL
          />
        ))}
      </div>
    </div>
  );
}

export default TemplateListSection;
