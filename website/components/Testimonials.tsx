import { GBP_MAPS_URL } from "@/lib/site";

type Testimonial = {
  name: string;
  text: string;
  stars: number;
};

const testimonials: Testimonial[] = [
  {
    name: "Steve Frankham",
    text: "New Decorating has worked on a couple of projects for me, some exterior work which needed a lot of preparation before painting. I was kept informed of what was being done all through the stages. Also some interior work where I again cannot fault the work. Jay tidy at all times. In general a good job done, really pleased and 100% will be using him again.",
    stars: 5,
  },
  {
    name: "Mike Joe Coates",
    text: "Fantastic painter and decorator. Jay got back to me straight away with a sensible price. The job was to decorate my living room and hallway. He arrived on time every day, everything was covered in dust sheets, there was no mess at the end of the day. All done in one week, and what a great job he did. I would highly recommend Jay with any decorating that needs to be done.",
    stars: 5,
  },
  {
    name: "Cam New",
    text: "Highly recommend. New Decorating paint all my bespoke units, top quality finish and fast turnover.",
    stars: 5,
  },
  {
    name: "Andrew Scappaticci",
    text: "I highly recommend New Decorating having worked with him on various projects. Jay completes his work to a very high standard and always hits his deadlines. Very professional, clean and tidy and very competitive with his prices. Always happy to advise you and answer questions before any work is started. Overall 5 star service.",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 text-amber-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function Initials({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/15 text-accent font-display font-semibold text-sm flex items-center justify-center">
      {initials}
    </span>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-accent/10 border-t border-accent/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-accent text-sm font-medium uppercase tracking-[0.2em] text-center">
          Google reviews
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground text-center mt-2 tracking-tight">
          What my customers say
        </h2>
        <p className="mt-4 text-muted text-center max-w-2xl mx-auto leading-relaxed">
          Real reviews from customers on Google across Bath and North East Somerset.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl border border-black/8 bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              <StarRating count={t.stars} />
              <p className="mt-4 text-muted leading-relaxed text-sm flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-5 flex items-center gap-3 pt-4 border-t border-black/5">
                <Initials name={t.name} />
                <div>
                  <cite className="not-italic font-semibold text-foreground text-sm">
                    {t.name}
                  </cite>
                  <p className="text-xs text-muted mt-0.5">Google review</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={GBP_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent font-medium hover:text-accent-soft transition-colors"
            aria-label="See all reviews on Google (opens Google Maps)"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            See all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
