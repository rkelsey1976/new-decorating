"use client";

import { Fragment, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I get a quote?",
    answer: "Get in touch via our contact page or Facebook. Tell us roughly what you need (e.g. one room, full house, interior or exterior) and your location. We'll arrange a visit to quote in person where needed.",
  },
  {
    question: "Do you provide the paint and materials?",
    answer: "We can either supply materials as part of the job or work with paint and materials you provide. We're happy to advise on what to buy if you'd prefer to source it yourself.",
  },
  {
    question: "How long does a typical job take?",
    answer: "It depends on the size of the project. A single room might take a few days; a full interior can take several weeks. We'll give you a timeframe when we quote and work cleanly to minimise disruption.",
  },
  {
    question: "What areas do you cover?",
    answer:
      "We work across Bath and North East Somerset (BANES), including Bath, Keynsham, Midsomer Norton, Radstock and surrounding villages. Get in touch with your postcode and we'll confirm we cover your area.",
  },
  {
    question: "Do you do small jobs?",
    answer: "Yes. Whether it's a single room, a touch-up, or a full redecoration, we're happy to quote. No job is too small.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
          Support
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mt-2 tracking-tight">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-muted text-center max-w-xl mx-auto leading-relaxed">
          Common questions about our painting and decorating services.
        </p>
        <dl className="mt-12 [&>dt]:first:mt-0 [&>dt]:mt-4">
          {faqs.map((faq, index) => (
            <Fragment key={index}>
              <dt className="m-0 rounded-t-2xl border border-black/8 border-b-0 bg-white overflow-hidden shadow-sm">
                <button
                  type="button"
                  className="flex w-full items-center justify-between px-6 py-4 text-left font-display text-lg font-semibold text-foreground hover:bg-black/[0.02] transition-colors rounded-t-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
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
                id={`faq-answer-${index}`}
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
