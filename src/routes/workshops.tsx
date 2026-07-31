import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "../components/section";
import { programs } from "../lib/site-content";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Golf Workshops & Private Coaching — SisterGolf" },
      {
        name: "description",
        content:
          "Ladies Business Golf, Deals on the Green, Cubicle to Course and private on-course coaching for professionals who want golf to work for their career.",
      },
      { property: "og:title", content: "Golf Workshops & Private Coaching — SisterGolf" },
      {
        property: "og:description",
        content:
          "Group workshops, an online course and private on-course coaching from SisterGolf.",
      },
      { property: "og:url", content: "/workshops" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/workshops" }],
  }),
  component: WorkshopsPage,
});

function WorkshopsPage() {
  return (
    <>
      <PageHero
        eyebrow="Workshops & online courses"
        title="Schedule a workshop"
        intro="Four programs, one goal: make the game usable for your business. Every format can be delivered for an individual, a team or an entire organization."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="space-y-16">
          {programs.map((program, i) => (
            <article
              key={program.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden bg-muted">
                <img
                  src={program.image}
                  alt={program.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <div>
                <p className="eyebrow text-accent">{program.category}</p>
                <h2 className="mt-3 text-3xl text-fairway-deep">{program.name}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {program.blurb}
                </p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                  {program.detail}
                </p>
                <p className="mt-5 text-sm font-semibold text-fairway">{program.format}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-block rounded-sm bg-fairway px-6 py-3 text-sm font-semibold text-fairway-foreground hover:bg-fairway-deep"
                >
                  Enquire about {program.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-fairway-deep">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="text-3xl leading-tight text-fairway-foreground">
            Not sure which program fits?
          </h2>
          <p className="mt-4 text-fairway-foreground/75">
            Tell us who is playing and what you want out of the round, and we will point
            you to the right format.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
          >
            Contact SisterGolf
          </Link>
        </div>
      </section>
    </>
  );
}
