import legalAiServices from "@/app/(data)/template";
import React from "react";

export interface TEMPLATE {
  name: string;
  description: string;
  category: string;
  icon: string;
}

function TemplateListSection() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Available Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {legalAiServices.map((item: TEMPLATE, index: number) => (
          <div
            key={index}
            className="p-4 bg-white shadow-md rounded-lg flex items-center gap-4"
          >
            <span className="text-blue-500 text-2xl">
              {/* Assuming you're using Lucide icons or similar */}
              <i className={`lucide-${item.icon}`} />
            </span>
            <div>
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TemplateListSection;
