"use client";

import { Fragment, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type AreaFAQProps = {
  faqs: FAQItem[];
  areaName: string;
};

export default function AreaFAQ({ faqs, areaName }: AreaFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-background" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="faq-heading"
          className="font-display text-2xl sm:text-3xl font-semibold text-foreground text-center tracking-tight"
        >
          Frequently asked questions about painting and decorating in {areaName}
        </h2>
        <dl className="mt-12 [&>dt]:first:mt-0 [&>dt]:mt-4">
          {faqs.map((faq, index) => (
            <Fragment key={index}>
              <dt className="m-0 rounded-t-2xl border border-black/8 border-b-0 bg-white overflow-hidden shadow-sm">
                <h3 className="sr-only">{faq.question}</h3>
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-display text-lg font-semibold text-foreground hover:bg-black/[0.02] transition-colors rounded-t-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`area-faq-answer-${index}`}
                  id={`area-faq-question-${index}`}
                >
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-accent" aria-hidden="true">
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
              </dt>
              <dd
                id={`area-faq-answer-${index}`}
                className={`m-0 rounded-b-2xl border border-black/8 border-t-0 bg-white px-6 pb-4 text-muted leading-relaxed shadow-sm ${openIndex === index ? "block" : "hidden"}`}
                aria-hidden={openIndex !== index}
              >
                {faq.answer}
              </dd>
            </Fragment>
          ))}
        </dl>
      </div>
    </section>
  );
}
