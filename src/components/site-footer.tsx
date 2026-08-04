import { Link } from "@tanstack/react-router";
import { contactDetails } from "../lib/pages-content";
import { links } from "../lib/site-content";

const columnOne = [
  { label: "Workshops", to: "/workshops" },
  { label: "About Us", to: "/about-us" },
  { label: "Ladies Business Golf", to: "/service/ladies-business-golf" },
  { label: "Founders Message", to: "/founder-message" },
];

const columnTwo = [
  { label: "Deals On The Green", to: "/service/deals-on-the-green" },
  { label: "Cubicle to Course", to: "/service/cubicle-to-course" },
  { label: "Private Coaching", to: "/service/private-coaching" },
  { label: "SisterGolf Foundation", to: "/sistergolf-foundation" },
];

const columnThree = [
  { label: "Programs", to: "/programs" },
  { label: "Gallery", to: "/woodfin-golf-2025" },
  { label: "Products", to: "/products" },
  { label: "Membership", to: "/sistergolf-membership" },
];

export function SiteFooter() {
  return (
    <footer className="bg-fairway-deep text-fairway-foreground">
      <div className="border-b border-fairway-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <h2 className="text-2xl text-fairway-foreground">
            Sign Up to get Latest Updates
          </h2>
          <a
            href={links.newsletter}
            className="rounded-sm bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            Subscribe Now
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <img
            src={contactDetails.logo}
            alt="Sister Golf Logo"
            loading="lazy"
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-fairway-foreground/70">
            {contactDetails.tagline}
          </p>

          <address className="mt-6 space-y-1 text-sm not-italic text-fairway-foreground/70">
            {contactDetails.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </address>

          <div className="mt-4 space-y-1 text-sm">
            <p className="text-fairway-foreground/50">Email Address</p>
            <a
              href={`mailto:${contactDetails.email}`}
              className="text-fairway-foreground/80 hover:text-accent"
            >
              {contactDetails.email}
            </a>
          </div>

          <div className="mt-4 space-y-1 text-sm">
            <p className="text-fairway-foreground/50">Phone Number</p>
            <a
              href={`tel:${contactDetails.phone.replace(/-/g, "")}`}
              className="text-fairway-foreground/80 hover:text-accent"
            >
              {contactDetails.phone}
            </a>
          </div>

          <ul className="mt-6 flex gap-5 text-sm">
            {contactDetails.social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-fairway-foreground/70 hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {[columnOne, columnTwo, columnThree].map((column, i) => (
          <div key={i}>
            <h3 className="eyebrow text-fairway-foreground/60">
              {["Explore", "Workshops", "More"][i]}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {column.map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-fairway-foreground/15">
        <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-fairway-foreground/60">
          © {new Date().getFullYear()} Sister Golf | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
