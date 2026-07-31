import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/section";
import { books, images, posts, programs } from "../lib/site-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SisterGolf — Golf as a Business Tool for Women" },
      {
        name: "description",
        content:
          "Workshops, coaching and courses that teach women business professionals to use golf to build relationships, close deals and get promoted.",
      },
      { property: "og:title", content: "SisterGolf — Golf as a Business Tool for Women" },
      {
        property: "og:description",
        content:
          "Workshops, coaching and courses that teach women business professionals to use golf to build relationships and advance their careers.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-sand">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rise-in">
            <p className="eyebrow text-accent">About Us</p>
            <h1 className="mt-4 text-4xl leading-[1.03] text-fairway-deep sm:text-6xl">
              We teach women how to play golf to achieve business success
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SisterGolf teaches women business professionals how they can use golf as a
              tool for developing mutually beneficial business relationships, and creating
              connections for professional advancement in the corporate workplace.
            </p>

            <dl className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-accent pl-4">
                <dt className="text-xl text-fairway-deep">Build Relationships</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Close more deals and get promoted.
                </dd>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <dt className="text-xl text-fairway-deep">Make Connections</dt>
                <dd className="mt-1 text-sm text-muted-foreground">
                  Play golf to achieve business and career success.
                </dd>
              </div>
            </dl>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/workshops"
                className="rounded-sm bg-fairway px-6 py-3 text-sm font-semibold text-fairway-foreground transition-colors hover:bg-fairway-deep"
              >
                See Workshops
              </Link>
              <Link
                to="/about"
                className="rounded-sm border border-fairway/30 px-6 py-3 text-sm font-semibold text-fairway transition-colors hover:bg-fairway/5"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -right-10 -top-10 hidden h-64 w-64 rounded-full bg-accent/10 lg:block" />
            <img
              src={images.heroGolfer}
              alt="Illustration of a woman golfer at the top of her backswing"
              className="relative mx-auto w-full max-w-md"
              width={661}
              height={661}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="What we offer"
          title="Workshops & training"
          intro="Four ways to get in the game, whether you have never held a club or already play and want the round to produce business."
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => (
            <article key={program.slug} className="group">
              <div className="overflow-hidden bg-muted">
                <img
                  src={program.image}
                  alt={program.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <p className="eyebrow mt-5 text-accent">{program.category}</p>
              <h3 className="mt-2 text-xl text-fairway-deep">{program.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {program.blurb}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-fairway-deep">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 sm:py-24 lg:grid-cols-2">
          <img
            src={images.founderMessage}
            alt="Shella Sylla, founder and CEO of SisterGolf"
            loading="lazy"
            className="w-full object-cover"
          />
          <div>
            <SectionHeading
              eyebrow="Shella Sylla / Founder & CEO"
              title="Message from the Founder"
              tone="onDark"
            />
            <p className="mt-6 text-base leading-relaxed text-fairway-foreground/75">
              SisterGolf is the brainchild of Shella Sylla, an ex-banking executive with
              over 18 years in the financial services industry. Shella experienced
              firsthand how golf can positively impact your career after taking up the
              sport early in her banking career. Within a few short months of taking
              lessons, she went from struggling to meet her monthly goal of $500,000 to
              being a repeat member of the “Million Dollar” club.
            </p>
            <Link
              to="/founder"
              className="mt-8 inline-block border-b border-accent pb-1 text-sm font-semibold text-fairway-foreground hover:text-accent"
            >
              Read her story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Books for sale"
          title="Books by Shella Sylla"
          intro="Journals for tracking your rounds, your progress and your golf travels. Available on Amazon."
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {books.map((book) => (
            <article key={book.title} className="flex gap-5">
              <img
                src={book.image}
                alt={`${book.title} cover`}
                loading="lazy"
                className="h-36 w-auto shadow-sm"
              />
              <div>
                <h3 className="text-lg text-fairway-deep">{book.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {book.description}
                </p>
                <a
                  href={book.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-block border-b border-accent pb-0.5 text-sm font-semibold text-fairway"
                >
                  Buy at Amazon
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-3xl leading-tight text-fairway-deep">
              Be sure to check out our golf workshops and private coaching
            </h2>
            <p className="mt-3 text-muted-foreground">
              Learn everything you need to know about making the game of golf work for you.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/workshops"
              className="rounded-sm bg-fairway px-6 py-3 text-sm font-semibold text-fairway-foreground hover:bg-fairway-deep"
            >
              See Workshops
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border border-fairway/30 px-6 py-3 text-sm font-semibold text-fairway hover:bg-fairway/5"
            >
              Private Coaching
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <SectionHeading
          eyebrow="Latest news"
          title="Blog articles"
          intro="Golfing tips, insights and news from the SisterGolf community."
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {posts.slice(0, 3).map((post) => (
            <article key={post.title}>
              <a href={post.url} target="_blank" rel="noreferrer" className="group block">
                <div className="overflow-hidden bg-muted">
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  {post.date} · {post.author}
                </p>
                <h3 className="mt-2 text-xl leading-snug text-fairway-deep group-hover:text-accent">
                  {post.title}
                </h3>
              </a>
            </article>
          ))}
        </div>
        <Link
          to="/blog"
          className="mt-12 inline-block border-b border-accent pb-1 text-sm font-semibold text-fairway"
        >
          All articles
        </Link>
      </section>
    </>
  );
}
