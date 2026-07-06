"use client";

import { useState } from "react";

export default function AcademyFAQ() {
  const faqs = [
    {
      question: "Do I need prior AI experience?",
      answer: "No prior AI experience is required. We start from the absolute basics, covering Python, cloud fundamentals, and core ML concepts before advancing to complex implementations.",
    },
    {
      question: "Is this course practical or theoretical?",
      answer: "This course is highly practical and hands-on. While we cover the necessary theoretical foundations, the majority of your time will be spent building and deploying real-world AI applications.",
    },
    {
      question: "Will I build projects?",
      answer: "Yes. This program is 100% project-based. You will build and deploy 13 real-world AI applications covering NLP, Computer Vision, and Generative AI.",
    },
    {
      question: "Will I learn AWS?",
      answer: "Absolutely. AWS is deeply integrated into the curriculum. You will gain hands-on experience with core AWS services like SageMaker, Bedrock, S3, and API Gateway.",
    },
    {
      question: "Is there a capstone project?",
      answer: "Yes, the program culminates in an end-to-end Capstone Project where you will build, deploy, and present a complete AI product from scratch, guided by industry mentors.",
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes. Upon successfully meeting all course requirements and project deliverables, you will receive a Program Completion Certificate issued by AGS Academy.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            COMMON QUESTIONS
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Everything You Might Ask
          </h2>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`border-b border-white/5 transition-colors ${
                openIndex === idx ? "" : ""
              }`}
            >
              <button
                className="w-full text-left py-6 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              >
                <span className="text-white font-bold text-sm md:text-base pr-8">
                  {faq.question}
                </span>
                <span className="text-[#9D7AFF] shrink-0 transition-transform duration-300 text-xl font-medium">
                  {openIndex === idx ? (
                    "−"
                  ) : (
                    "+"
                  )}
                </span>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 pb-6 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
