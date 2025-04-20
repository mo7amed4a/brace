'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQSection() {
  const questions=[
      {
        question: " How does BRACE approach web development?",
        answer: "Answer 1",
      },
      {
        question: "Can BRACE develop custom mobile apps?",
        answer: "Answer 2",
      },
      {
        question: "What is included in BRACE’s UI/UX design services?",
        answer: "Answer 3",
      },
      {
        question: "Does BRACE provide digital marketing solutions?",
        answer: "Answer 3",
      },
      {
        question: "How long does it take to complete a project with BRACE?",
        answer: "Answer 3",
      }
    ]
  return (
    questions && (
      <section className="py-16">
        <div className="custom-container max-w-5xl mx-auto px-4">
          <div className="flex flex-col items-center gap-4 py-10">
            <h2 className="text-3xl font-bold text-start">Frequently Asked Questions - FAQs</h2>
            <p>Find answers to frequently asked questions about our products, services, and policies.</p>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {questions?.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-t border-gray-600 py-">
                <AccordionTrigger className="flex justify-between items-center w-full text-left text-xl font-medium hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-200 pt-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  )
}
