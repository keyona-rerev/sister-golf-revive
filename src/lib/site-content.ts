export type Program = {
  slug: string;
  name: string;
  category: string;
  image: string;
  blurb: string;
  detail: string;
  format: string;
};

export const programs: Program[] = [
  {
    slug: "ladies-business-golf",
    name: "Ladies Business Golf",
    category: "Workshops",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2018/12/ladies-business-golf-2-600x750.jpg",
    blurb:
      "A group workshop that takes women from never having held a club to confidently accepting the invitation to play.",
    detail:
      "Half-day and full-day formats combine classroom instruction on rules, etiquette and business conversation with hands-on time on the range and the course. Built for corporate teams, associations and women's networks.",
    format: "Group workshop · Half or full day",
  },
  {
    slug: "deals-on-the-green",
    name: "Deals on the Green",
    category: "Private Coaching",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2018/12/deals-on-the-green-3-600x750.jpg",
    blurb:
      "The business side of the round: how to use eighteen holes to open a relationship, and when to actually talk business.",
    detail:
      "A coaching engagement for professionals who already play, or are close, and want the round to produce pipeline. Covers invitations, pairings, pace, wagering etiquette, and the timing of the ask.",
    format: "Private coaching · 1:1 or small group",
  },
  {
    slug: "cubicle-to-course",
    name: "Cubicle to Course",
    category: "Online Course",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2018/10/cubicle-to-course-2-600x750.jpg",
    blurb:
      "Everything you need before your first business round, on your own schedule.",
    detail:
      "A self-paced online curriculum covering equipment, dress, rules, etiquette, scoring and the unwritten rules of the corporate outing — so nothing about the day is a surprise.",
    format: "Online course · Self-paced",
  },
  {
    slug: "private-coaching",
    name: "Private Coaching",
    category: "Private Coaching",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2018/10/private-coaching-small-group-600x750.jpg",
    blurb:
      "One-on-one and small-group on-course training tailored to where your game and your career are today.",
    detail:
      "Sessions are built around your goals, whether that is breaking 100, holding your own in a scramble, or hosting clients at your company tournament.",
    format: "Private coaching · On course",
  },
];

export type Book = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export const books: Book[] = [
  {
    title: "Golf Tournament Tracker",
    description:
      "A fun and easy-to-use journal for keeping track of tournament results.",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2023/01/195365312X.01._SCLZZZZZZZ_SX500_-244x300.jpg",
    url: "https://www.amazon.com/dp/195365312X",
  },
  {
    title: "Golf Progress Tracker",
    description: "The perfect and easy way to track your progress round by round.",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2023/01/41h6em2xz1L-244x300.jpg",
    url: "https://www.amazon.com/dp/1953653111",
  },
  {
    title: "Golf Travel Journal",
    description:
      "Keep a record of every course you play and every golf adventure you take.",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2023/01/1953653138.01._SCLZZZZZZZ_SX500_-201x300.jpg",
    url: "https://www.amazon.com/Golf-Travel-Journal-Perfect-Adventures/dp/1953653138",
  },
];

export type Post = {
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  excerpt: string;
  url: string;
};

export const posts: Post[] = [
  {
    title: "The Fusion of Golf and Business Tactics",
    date: "Dec 19, 2023",
    author: "Joel Snyder",
    category: "Golf Tips",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2024/05/sisters-640x420-1.jpg",
    excerpt:
      "Where the strategy of a good round and the strategy of a good deal overlap — and how to use both at once.",
    url: "https://sistergolfonline.com/golf-tips/the-fusion-of-golf-and-business-tactics/",
  },
  {
    title: "Should you mark and play with \u201cpractice balls\u201d?",
    date: "Jan 21, 2021",
    author: "Shella Sylla",
    category: "Golf Tips",
    image:
      "https://sistergolfonline.com/wp-content/uploads/2021/01/Practice-balls-1024x1024-1-770x500.jpg",
    excerpt:
      "A small equipment habit that quietly signals how seriously you take the game.",
    url: "https://sistergolfonline.com/golf-tips/should-you-mark-and-play-with-practice-balls/",
  },
  {
    title: "5 Reasons to Pick Up a Golf Club Today",
    date: "Apr 20, 2020",
    author: "Shella Sylla",
    category: "Golf Tips",
    image: "https://sistergolfonline.com/wp-content/uploads/2020/04/N1-1024-770x500.jpg",
    excerpt:
      "The business case for learning the game now instead of the season after next.",
    url: "https://sistergolfonline.com/golf-tips/five-reasons-you-should-pick-up-a-golf-club-today/",
  },
  {
    title: "Practice the Way You Play",
    date: "Apr 02, 2019",
    author: "Shella Sylla",
    category: "Golf Tips",
    image: "https://sistergolfonline.com/wp-content/uploads/2019/04/N6-1024-770x500.jpg",
    excerpt:
      "Range time only pays off when it looks something like the round you are preparing for.",
    url: "https://sistergolfonline.com/golf-tips/practice-the-way-you-play/",
  },
  {
    title: "How Golf Acts as an Equalizer in Business",
    date: "Jan 22, 2019",
    author: "Shella Sylla",
    category: "Golf Tips",
    image: "https://sistergolfonline.com/wp-content/uploads/2019/01/N5-1024-770x500.jpg",
    excerpt:
      "Four hours with a decision maker is access no meeting request will ever buy you.",
    url: "https://sistergolfonline.com/golf-tips/how-golf-acts-as-an-equalizer-in-business/",
  },
  {
    title: "What is SisterGolf?",
    date: "Jan 15, 2019",
    author: "Shella Sylla",
    category: "Golf Tips",
    image: "https://sistergolfonline.com/wp-content/uploads/2019/01/N3-1024-770x500.jpg",
    excerpt:
      "The origin of the program, and who it was built for in the first place.",
    url: "https://sistergolfonline.com/golf-tips/what-is-sister-golf/",
  },
];

export type Press = { name: string; logo: string; url: string };

export const press: Press[] = [
  {
    name: "The Birmingham Times",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/ASA-Birmingham-Times-Logo.png",
    url: "https://www.birminghamtimes.com/2017/04/sistergolf-takes-female-empowerment-to-the-green/",
  },
  {
    name: "Hoover Sun",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/ASA-Hoover-Sun-Logo.png",
    url: "https://hooversun.com/peopleplaces/joining-the-club723/",
  },
  {
    name: "StyleBlueprint",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/ASA-Style-Blueprint-Logo.png",
    url: "https://styleblueprint.com/birmingham/everyday/shella-sylla-sistergolf/",
  },
  {
    name: "Business Alabama",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/ASA-Business-Alabama-Lt.png",
    url: "https://businessalabama.com/four-worth-studying/",
  },
  {
    name: "Doing More Today",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/ASA-Doing-More-Logo.png",
    url: "https://doingmoretoday.com/golf-as-a-great-equalizer/",
  },
  {
    name: "Regions",
    logo: "https://sistergolfonline.com/wp-content/uploads/2023/01/As-Seen-On-Regions.png",
    url: "https://www.3blmedia.com/news/golf-great-equalizer",
  },
];

export const images = {
  heroGolfer:
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Red-woman-golfer-rev661.png",
  founderMessage:
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Shella-Message.jpg",
  founderPortrait:
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Golf-head-shot2-690x1024-1.jpg",
  signature: "https://sistergolfonline.com/wp-content/uploads/2023/01/sella-sig.png",
  history: [
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-1.jpg",
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-3.jpg",
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-5.jpg",
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-7.jpg",
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-8.jpg",
    "https://sistergolfonline.com/wp-content/uploads/2023/01/Slide-9.jpg",
  ],
};
