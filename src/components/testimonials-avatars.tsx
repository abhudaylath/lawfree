import Image from "next/image";
const avatars: {
    alt: string;
    src: string;
}[] = [
        {
            alt: "User avatar",
            src: "/pro.png",
        },
        {
            alt: "User avatar",
            src: "/pro.png",
        },
        {
            alt: "User avatar",
            src: "/pro.png",
        },
        {
            alt: "User avatar",
            src: "/pro.png",
        },
        {
            alt: "User avatar",
            src: "/pro.png",
        },
    ];

const TestimonialsAvatars = ({ priority }: { priority?: boolean }) => {
    return (
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:items-center md:space-x-6">
            {/* AVATARS */}
            <div className="flex flex-wrap justify-center -space-x-3">
                {avatars.map((image, i) => (
                    <div
                        key={i}
                        className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md"
                    >
                        <Image
                            className="h-full w-full object-cover"
                            src={image.src}
                            alt={image.alt}
                            priority={priority}
                            width={48}
                            height={48}
                        />
                    </div>
                ))}
            </div>

            {/* RATING */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 text-yellow-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ))}
                </div>

                <span className="text-sm font-medium text-gray-600">
                    Loved by teachers worldwide
                </span>
            </div>
        </div>
    );
};

export default TestimonialsAvatars;