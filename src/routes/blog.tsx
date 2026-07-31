import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/section";
import { posts } from "../lib/site-content";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Golf Tips & Insights — SisterGolf Blog" },
      {
        name: "description",
        content:
          "Golfing tips, insights and articles on using the game for business, from Shella Sylla and the SisterGolf team.",
      },
      { property: "og:title", content: "Golf Tips & Insights — SisterGolf Blog" },
      {
        property: "og:description",
        content:
          "Articles on golf etiquette, practice and using the round to build business relationships.",
      },
      { property: "og:url", content: "/blog" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Latest news"
        title="Blog articles"
        intro="Golfing tips, insights, news and articles — check them out and share them."
      />

      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
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
                <p className="eyebrow mt-5 text-accent">{post.category}</p>
                <h2 className="mt-2 text-xl leading-snug text-fairway-deep group-hover:text-accent">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  {post.date} · by {post.author}
                </p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
