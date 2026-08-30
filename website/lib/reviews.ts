/**
 * Google reviews — single source of truth.
 *
 * Consumed by components/Testimonials.tsx (display) and
 * lib/professionalServiceSchema.ts (Review JSON-LD), so the two can never drift.
 *
 * Only genuine, published Google reviews belong in here. Newest first.
 * Keep GOOGLE_REVIEW_COUNT in lib/site.ts in step with the live profile total.
 */

export interface Review {
  /** Reviewer name as it appears on the Google profile */
  name: string;
  /** Review body, verbatim */
  text: string;
  stars: number;
  /** ISO date the review was published (omit where unknown) */
  date?: string;
  /**
   * Jason's reply on the Google profile. Lightly tidied for typos and spacing
   * only — the wording and voice are his. Review `text` above is always verbatim.
   */
  reply?: string;
}

export const REVIEWS: Review[] = [
  {
    name: "Janet Warren",
    date: "2026-08-22",
    stars: 5,
    text: "A big shout out to Jason - New Decorating for a marvellous job.\nOur building is a grade 2 listed building in Bath. Jason's workmanship was first class, everything the said he would do he did and we feel he went above our expectations.\nJason was prompt, well mannered, reliable and left the job side spotless.\nWe have had many people stop in front of our building admiring his work.\nI have no hesitation in recommending New Decorating to anyone for any painting and decorating work they require.\nJanet & Dale W.",
    reply: "Thanks so much, house looks great now \u2728\ufe0f\u2728\ufe0f\u2728\ufe0f",
  },
  {
    name: "Nicole Robinson",
    date: "2026-08-13",
    stars: 5,
    text: "Jason has just repainted some black exterior metal gates for us, that had looked old, rusty and tired. They now look brand-new! We are absolutely delighted. He was extremely friendly, professional, with great communication and he did a superb job for us.",
    reply: "Thank you for the kind words, Nicole \u2014 gates look great now \ud83d\udc4c thank you for all the cold drinks \ud83d\udd25\u2728\ufe0f\u2728\ufe0f\u2728\ufe0f\u2728\ufe0f",
  },
  {
    name: "Leah",
    date: "2026-07-26",
    stars: 5,
    text: "Would highly recommend New Decorating to anyone looking for a reliable, professional painter. Did a great job prepping and painting our living room. Really pleased with the result. Thank you",
    reply: "Hi, thank you so much for your kind review! It was a pleasure decorating your living room, and I'm really pleased to hear you're happy with the finished result. Your recommendation means a lot to me and is greatly appreciated. Thanks again for choosing New Decorating, and if you ever need any painting or decorating in the future, I'd be happy to help.\n\u2013 Jason, New Decorating",
  },
  {
    name: "Suzie Shaw",
    date: "2026-07-16",
    stars: 5,
    text: "Jason gave me a good quote to paint all our external downpipes and some Gutters. He was reliable and did exactly what he promised, when he promised it. It looks fantastic. Many thanks for all the hard work",
    reply: "Thank you Suzie, all looks great on your lovely house \u2728\ufe0f",
  },
  {
    name: "Tim Westwell",
    date: "2026-05-20",
    stars: 5,
    text: "Great professional external job from Jason. Really pleased with the finishing and attention to doing it right all along the way",
    reply: "Thank you for the review, it was a lovely project to work on \u2014 it all looks amazing.",
  },
  {
    name: "Simon Shell",
    date: "2026-03-16",
    stars: 5,
    text: "Jay has very good attention to detail,\nBeing the scaffolding company Jay uses for his external decorating jobs I get to see the before and after of all of the external works he does.\nHis finishes are done to the highest standard and always leave the site and scaffold spotless.\nWe Highly recommend Jay for any of your internal or external decorating.",
    reply: "Thanks for your review, it means a lot to me.",
  },
  {
    name: "Steve Frankham",
    stars: 5,
    text: "New Decorating has worked on a couple of projects for me, some exterior work which needed a lot of preparation before painting. I was kept informed of what was being done all through the stages. Also some interior work where I again cannot fault the work. Jay tidy at all times. In general a good job done, really pleased and 100% will be using him again.",
  },
  {
    name: "Mike Joe Coates",
    stars: 5,
    text: "Fantastic painter and decorator. Jay got back to me straight away with a sensible price. The job was to decorate my living room and hallway. He arrived on time every day, everything was covered in dust sheets, there was no mess at the end of the day. All done in one week, and what a great job he did. I would highly recommend Jay with any decorating that needs to be done.",
  },
  {
    name: "Cam New",
    stars: 5,
    text: "Highly recommend. New Decorating paint all my bespoke units, top quality finish and fast turnover.",
  },
  {
    name: "Andrew Scappaticci",
    stars: 5,
    text: "I highly recommend New Decorating having worked with him on various projects. Jay completes his work to a very high standard and always hits his deadlines. Very professional, clean and tidy and very competitive with his prices. Always happy to advise you and answer questions before any work is started. Overall 5 star service.",
  },
];
