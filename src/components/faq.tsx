"use client";
import React, { useState } from "react";
import TestimonialSingle from "./testimonial-single";

const faqData = [
    {
        question: "What is AI Legal Assistant?",
        answer: (
            <div className="space-y-2 leading-relaxed">
                <p>
                    AI Legal Assistant is an advanced AI-powered platform designed to assist legal professionals with legal document drafting, case law research, and legal strategy suggestions. It helps streamline workflows and enhance efficiency in legal practice.
                </p>
            </div>
        ),
    },
    {
        question: "How does the free plan work?",
        answer:
            "Our free plan offers 10 AI-generated legal drafts and basic case law search capabilities. This allows you to explore AI Legal Assistant's features and experience its benefits at no cost.",
    },
    {
        question: "What features are included in the Pro Plan?",
        answer:
            "The Pro Plan includes unlimited AI-generated legal documents, advanced case law research, legal contract analysis, AI-powered legal strategy suggestions, and priority support.",
    },
    {
        question: "Can I try AI Legal Assistant before subscribing?",
        answer:
            "Absolutely! Our free plan allows you to generate up to 10 legal drafts and perform basic case law searches to see how AI Legal Assistant can enhance your legal practice before committing to a subscription.",
    },
    {
        question: "How does AI assist in legal research?",
        answer:
            "Our AI analyzes vast legal databases, case laws, and statutes to provide precise and relevant insights, streamlining your legal research and saving you valuable time.",
    },
    {
        question: "Is my data secure?",
        answer:
            "Yes, we prioritize data security. All user data is encrypted, and we comply with strict legal industry privacy standards to ensure confidentiality and protection of your sensitive information.",
    },
    {
        question: "Can I customize AI-generated legal drafts?",
        answer:
            "Absolutely! AI-generated legal documents serve as a strong foundation, and you have full control to edit, refine, and tailor them to your specific legal needs.",
    },
    {
        question: "What types of legal documents can AI Legal Assistant generate?",
        answer:
            "AI Legal Assistant can generate contracts, agreements, legal memos, demand letters, compliance documents, and various other legal drafts across multiple practice areas.",
    },
    {
        question: "How frequently is AI Legal Assistant updated?",
        answer:
            "We continuously enhance our AI models and legal database to provide the most up-to-date legal insights and document templates, ensuring you have access to the latest legal standards and regulations.",
    },
    {
        question: "Can I collaborate with my legal team on AI Legal Assistant?",
        answer:
            "Yes, our platform includes collaboration features that allow legal professionals to share and co-edit legal documents, enhancing teamwork and efficiency within your practice.",
    },
];

const FAQItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: React.ReactNode;
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <li>
            <button
                className="relative flex w-full items-center gap-2 border-t border-slate-200 py-5 text-left text-base font-semibold md:text-lg"
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span className="flex-1 text-slate-800">{question}</span>
                <svg
                    className={`ml-auto h-4 w-4 flex-shrink-0 fill-current transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M8 12L2 6h12l-6 6z" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="pb-5 leading-relaxed text-slate-600">
                    {typeof answer === "string" ? <p>{answer}</p> : answer}
                </div>
            </div>
        </li>
    );
};

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-slate-50" id="faq">
            <div className="mx-auto max-w-7xl px-8 py-24">
                <div className="flex flex-col gap-12 md:flex-row">
                    <div className="flex basis-1/2 flex-col text-left">
                        <p className="mb-4 inline-block font-bold text-blue-500">FAQ</p>
                        <p className="text-3xl font-extrabold text-slate-800 md:text-4xl">
                            Frequently Asked Questions
                        </p>
                    </div>
                    <ul className="basis-1/2">
                        {faqData.map((item, index) => (
                            <FAQItem
                                key={index}
                                question={item.question}
                                answer={item.answer}
                                isOpen={openIndex === index}
                                onClick={() => handleToggle(index)}
                            />
                        ))}
                    </ul>
                </div>
                <TestimonialSingle
                    testimonial={{
                        name: "Michael Carter",
                        content:
                            "AI Legal Assistant has completely changed the way I practice law. It saves time, enhances accuracy, and allows me to focus on higher-value tasks for my clients.",
                        firmName: "Carter & Associates Law Firm",
                        image: "/pro.png",
                    }}
                />
            </div>
        </section>
    );
}
