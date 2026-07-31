import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SectionHeading } from "../components/section";
import { press } from "../lib/site-content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SisterGolf — Expose, Educate, Empower" },
      {
        name: "description",
        content:
          "The SisterGolf mission: exposing female business professionals to golf, teaching the rules and etiquette, and building the confidence to play alongside their peers.",
      },
      { property: "og:title", content: "About SisterGolf — Expose, Educate, Empower" },
      {
        property: "og:description",
        content:
          "Our mission is to help women use golf as a tool for business relationships and professional advancement.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const pillars = [
  {
    title: "Expose",
    body: "Expose women to the game of golf and the benefits the sport has on one's career.",
  },
  {
    title: "Educate",
    body: "Educate women on the rules and etiquette of the game so nothing on the course is a surprise.",
  },
  {
    title: "Empower",
    body: "Empower women by helping them build the confidence to play alongside their male counterparts.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Next level"
        title="What SisterGolf is all about"
        intro="The mission of SisterGolf is to expose and educate female business professionals on how they can use golf as a tool for developing mutually beneficial business relationships, and creating connections for professional advancement in the corporate workplace."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <div key={pillar.title} className="border-t border-border pt-6">
              <span className="eyebrow text-accent">0{i + 1}</span>
              <h2 className="mt-3 text-2xl text-fairway-deep">{pillar.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-fairway-deep">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Who it's for"
            title="Women who already earned a seat at the table"
            tone="onDark"
          />
          <div className="space-y-5 text-base leading-relaxed text-fairway-foreground/75">
            <p>
              Our participants are bankers, attorneys, sales leaders, founders and
              executives — women who are already very good at their jobs and are tired of
              hearing that a decision got made on a course they weren't invited to.
            </p>
            <p>
              You do not need to arrive as a golfer. Most of our participants have never
              held a club. What they leave with is the vocabulary, the etiquette and the
              confidence to accept the next invitation, keep pace with the group, and use
              four hours of access the way it was always meant to be used.
            </p>
            <p>
              Programs run for individuals, corporate teams, associations and women's
              networks, on the range and on the course.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="SisterGolf noteworthy"
          title="SisterGolf in the news"
          intro="Click a publication to read the article."
        />
        <div className="mt-12 grid grid-cols-2 items-center gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {press.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="opacity-70 transition-opacity hover:opacity-100"
            >
              <img
                src={item.logo}
                alt={item.name}
                loading="lazy"
                className="max-h-14 w-full object-contain"
              />
            </a>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl leading-tight text-fairway-deep">
            Ready to get your team in the game?
          </h2>
          <Link
            to="/contact"
            className="rounded-sm bg-fairway px-6 py-3 text-sm font-semibold text-fairway-foreground hover:bg-fairway-deep"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  );
}
