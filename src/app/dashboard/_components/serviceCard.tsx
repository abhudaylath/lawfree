import React from "react";
import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon }) => {
    return (
        <div className="p-6 bg-white shadow-lg rounded-xl flex items-center gap-4 hover:shadow-xl transition-shadow duration-300">
            {/* Icon using Next.js Image for better optimization */}
            <div className="w-12 h-12 flex-shrink-0">
                <Image
                    src={icon}
                    alt={name}
                    width={48}
                    height={48}
                    className="object-contain"
                />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
