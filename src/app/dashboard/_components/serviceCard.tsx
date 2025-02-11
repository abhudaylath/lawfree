import React from "react";
import Image from "next/image";

interface ServiceCardProps {
    name: string;
    description: string;
    icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ name, description, icon }) => {
    return (
        <div className="p-5 bg-white shadow-md rounded-md flex flex-col items-center gap-3 cursor-pointer border hover:scale-105 transition-all">
            <Image
                src={icon}
                alt={name}
                width={50}
                height={50}
                className="object-contain"
            />
            <h2 className="text-lg font-medium text-gray-800">{name}</h2>
            <p className="text-gray-500 line-clamp-3">{description}</p>
        </div>
    );
};

export default ServiceCard;
