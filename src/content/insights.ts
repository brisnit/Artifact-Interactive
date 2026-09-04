export type Category =
  | "Learning Intelligence"
  | "Research"
  | "Predictive Learning"
  | "Institutions"
  | "Ethics & Design";

export type Article = {
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  category: Category;
  author: string;
  authorRole: string;
  date: string;
  readingTime: number;
  featured?: boolean;
  /** Optional article figure; the slot falls back to a reserved plate. */
  figure?: { src: string; alt: string; width: number; height: number };
  /** Body is authored as a light block model so article pages stay typed. */
  body: Block[];
};

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "note"; text: string };

export const categories: Category[] = [
  "Learning Intelligence",
  "Research",
  "Predictive Learning",
  "Institutions",
  "Ethics & Design",
];

export const articles: Article[] = [
  {
    slug: "what-is-learning-intelligence",
    title: "What Is Learning Intelligence?",
    deck:
      "Analytics tells you what a number did. Learning intelligence tells you what a learning environment is doing.",
    excerpt:
      "Every institution already measures something. Fewer can explain what those measurements mean about how learning is actually unfolding. Learning intelligence is the layer in between.",
    category: "Learning Intelligence",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-11-18",
    readingTime: 8,
    featured: true,
    body: [
      {
        type: "p",
        text: "Learning environments are among the most data-rich places in modern institutional life, and among the least understood. A single lecture produces attendance, attention, questions, notes, silence, side conversations, submissions, revisions, and dozens of small decisions about what to do next. Almost none of it is captured as intelligence. Most of it is captured as a record — or not at all.",
      },
      {
        type: "p",
        text: "Learning intelligence is the discipline of turning that naturally occurring activity into a structured understanding of how people are learning. It is not a dashboard, and it is not a data warehouse. It is an interpretive layer that sits between experience and outcome and answers a question most systems cannot: what is actually happening in here, and what does it suggest about what happens next?",
      },
      { type: "h2", text: "The gap between measurement and understanding" },
      {
        type: "p",
        text: "Most institutional data describes endpoints. A grade is an endpoint. A completion is an endpoint. A withdrawal is an endpoint. By the time an endpoint is recorded, the conditions that produced it have already passed — often weeks earlier, often invisibly.",
      },
      {
        type: "p",
        text: "The conditions are where the intelligence lives. A student who stops asking questions in week four is producing a signal. A cohort that consistently reports confusion on one concept is producing a signal. A course where comprehension recovers quickly after a particular teaching decision is producing a signal. These are observable, structurable, and connectable — but only if something is designed to notice them.",
      },
      {
        type: "quote",
        text: "Learning leaves signals. The question is whether the institution is built to read them.",
      },
      { type: "h2", text: "What makes a signal useful" },
      {
        type: "p",
        text: "Not every data point is a signal. A signal has three properties: it occurs naturally inside the experience, it carries interpretable meaning about state or direction, and it can be related to other signals over time. A click is data. A moment where a student marks that a concept just became clear — and what made it clear — is a signal.",
      },
      {
        type: "list",
        items: [
          "It is generated in the ordinary course of teaching and learning, not in a separate administrative process.",
          "It describes a state (comprehension, confidence, engagement) or a change in state.",
          "It can be located in context: which concept, which moment, which environment, which population.",
          "It can be connected longitudinally, so a single response becomes a trajectory.",
        ],
      },
      { type: "h2", text: "From signals to pathways" },
      {
        type: "p",
        text: "Once signals accumulate with context, relationships begin to appear. Certain sequences of behavior tend to precede certain outcomes. Certain instructional decisions tend to be followed by recovery in comprehension. Certain patterns of disengagement tend to appear well before a withdrawal is filed.",
      },
      {
        type: "p",
        text: "These relationships are not predictions of individual human behavior, and it would be irresponsible to present them that way. They are pathways: modeled possibilities with associated likelihoods, useful precisely because they arrive early enough for someone to do something about them.",
      },
      {
        type: "note",
        text: "Artifact Intelligence is actively researching this discipline. The frameworks described here reflect our current thinking and are being developed with institutional partners rather than presented as settled science.",
      },
    ],
  },
  {
    slug: "why-learning-analytics-is-only-the-beginning",
    title: "Why Learning Analytics Is Only the Beginning",
    deck:
      "Analytics answered an important question. It was not the only question worth asking.",
    excerpt:
      "Learning analytics gave institutions a vocabulary for measurement. What it did not give them was an explanation. The next layer has to account for context, causality, and direction.",
    category: "Learning Intelligence",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-10-30",
    readingTime: 7,
    featured: true,
    figure: {
      src: "/imagery/figure-signal-network.png",
      alt: "A field of scattered grey points on the left drawing together through fine connecting lines into three dense clusters on the right, one picked out in blue.",
      width: 1584,
      height: 993,
    },
    body: [
      {
        type: "p",
        text: "Learning analytics was a genuine advance. It established that learning environments produce measurable phenomena, that those phenomena can be aggregated, and that institutions should look at them. That was not obvious twenty years ago.",
      },
      {
        type: "p",
        text: "But analytics inherited the shape of the systems it was built on. Learning management systems record transactions: submitted, viewed, logged in, completed. Analytics counted those transactions well. What it could not do was explain them.",
      },
      { type: "h2", text: "Three limits worth naming" },
      {
        type: "list",
        items: [
          "Proxy problems. Time-in-platform is not attention. Logins are not engagement. Submission is not understanding. Analytics frequently measures the shadow of the thing rather than the thing.",
          "Disconnection. The signals that would explain an outcome usually live in different systems than the outcome itself, and no one owns the join.",
          "Lateness. Descriptive reporting arrives after the window in which an intervention would have mattered.",
        ],
      },
      { type: "h2", text: "What comes next" },
      {
        type: "p",
        text: "Intelligence differs from analytics in what it is trying to produce. Analytics produces a measurement. Intelligence produces an interpretation with enough context and enough lead time to inform a decision.",
      },
      {
        type: "quote",
        text: "The difference between analytics and intelligence is the difference between a record and an understanding.",
      },
      {
        type: "p",
        text: "That requires collecting different inputs — signals designed to carry meaning rather than transactions repurposed as evidence — and connecting them across the systems and timeframes where the actual story lives.",
      },
    ],
  },
  {
    slug: "the-invisible-data-layer-inside-every-classroom",
    title: "The Invisible Data Layer Inside Every Classroom",
    deck:
      "The richest information in a learning environment is generated constantly and captured almost never.",
    excerpt:
      "Before any software is introduced, a classroom is already producing an enormous stream of information about comprehension, attention, and momentum. Most of it evaporates within minutes.",
    category: "Research",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-10-14",
    readingTime: 6,
    featured: true,
    figure: {
      src: "/imagery/figure-pathways.png",
      alt: "A single point on the left opening into three curved trajectories fanning to the right, the middle one heavier and blue.",
      width: 1584,
      height: 993,
    },
    body: [
      {
        type: "p",
        text: "Sit in the back of a lecture hall and you can watch information being created and lost in real time. A concept lands for two-thirds of the room and not the rest. Someone almost asks a question and decides against it. Attention recovers when an example is introduced. An instructor senses friction and adjusts.",
      },
      {
        type: "p",
        text: "Experienced faculty read this layer intuitively and respond to it constantly. It is one of the most sophisticated forms of real-time interpretation in professional life. It is also unrecorded, unshared, and non-transferable — it exists only in the instructor's judgment, in that room, on that day.",
      },
      { type: "h2", text: "Why it disappears" },
      {
        type: "p",
        text: "The layer disappears for practical reasons, not philosophical ones. Capturing it has historically required interrupting the thing being measured. Surveys arrive after the fact and ask people to reconstruct a state they were in weeks ago. Observation protocols are expensive and infrequent. Everything else is inference from proxies.",
      },
      {
        type: "quote",
        text: "The best data does not interrupt the experience that produces it.",
      },
      { type: "h2", text: "Designing for a layer that already exists" },
      {
        type: "p",
        text: "Our research focus is not on generating new data. It is on capturing what a learning environment already produces, with interactions light enough that participation costs a few seconds and produces something structurally meaningful — anchored to a concept, a moment, and a context.",
      },
      {
        type: "p",
        text: "One response tells you very little. A hundred thousand responses, anchored in context and connected over time, begin to describe how understanding forms inside a specific institution.",
      },
    ],
  },
  {
    slug: "can-learning-become-predictive",
    title: "Can Learning Become Predictive?",
    deck: "A careful answer to a question that is usually answered carelessly.",
    excerpt:
      "Predictive language in education deserves scrutiny. The honest version is narrower than the marketing version — and considerably more useful.",
    category: "Predictive Learning",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-09-26",
    readingTime: 9,
    body: [
      {
        type: "p",
        text: "The strong claim — that a system can know what a particular student will do — is not credible, and institutions are right to be skeptical of anyone making it. Human learning is contingent, contextual, and responsive to intervention. A model that claimed determinism would be wrong about the most important cases.",
      },
      {
        type: "p",
        text: "The weaker claim is both defensible and valuable: given sufficient contextual signal, a system can identify conditions statistically associated with particular outcomes, and can surface those conditions early enough for a person to respond.",
      },
      { type: "h2", text: "Prediction as a set of pathways, not a verdict" },
      {
        type: "p",
        text: "We model possible pathways rather than singular futures. From a current state, a set of trajectories is plausible. Each carries an estimated likelihood, a set of contributing conditions, and a set of decisions that measurably shift it.",
      },
      {
        type: "quote",
        text: "The purpose of a prediction in education is to make itself wrong.",
      },
      {
        type: "p",
        text: "This inverts the usual framing. A flagged risk pathway is not a forecast to be validated. It is an invitation to intervene, and the measure of the system is whether the intervention changed the trajectory.",
      },
      { type: "h2", text: "What responsible predictive learning requires" },
      {
        type: "list",
        items: [
          "Explainability. A pathway that cannot be explained cannot be acted on responsibly.",
          "Actionability. If nothing can be done differently, the prediction is surveillance rather than support.",
          "Bias examination. Models trained on historical outcomes can reproduce historical inequities; this must be tested continuously, not assumed away.",
          "Human authority. The system informs a decision. A person makes it.",
        ],
      },
    ],
  },
  {
    slug: "measuring-students-vs-understanding-learning",
    title: "The Difference Between Measuring Students and Understanding Learning",
    deck: "One produces a score. The other produces an explanation.",
    excerpt:
      "Measurement locates a learner on a scale. Understanding explains the conditions that put them there — and that distinction changes what an institution can do.",
    category: "Learning Intelligence",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-09-08",
    readingTime: 6,
    body: [
      {
        type: "p",
        text: "Measurement is a comparison against a standard. It is necessary, and institutions are good at it. But a measurement is a position, not an explanation — it tells you where someone landed without telling you what the environment did.",
      },
      {
        type: "p",
        text: "Two students can arrive at the same grade through entirely different learning experiences: one through steady comprehension, another through late compensation after weeks of confusion. The measurement is identical. The intelligence is not.",
      },
      { type: "h2", text: "Understanding is a property of environments" },
      {
        type: "p",
        text: "The most useful shift is to treat learning as something an environment produces rather than something an individual possesses. That reframes the questions: where does understanding reliably form in this curriculum, where does friction concentrate, which conditions precede recovery, and which precede disengagement?",
      },
      {
        type: "quote",
        text: "Measuring a student describes a person. Understanding learning describes a system.",
      },
      {
        type: "p",
        text: "Those questions are answerable with signal, and their answers are actionable in ways an individual score never is.",
      },
    ],
  },
  {
    slug: "why-universities-need-intelligence-layers",
    title: "Why Universities Need Intelligence Layers",
    deck:
      "The typical institution runs a dozen systems of record and no system of understanding.",
    excerpt:
      "The SIS knows enrollment. The LMS knows submissions. Advising knows conversations. No layer holds the relationships between them — and that is where the institution's understanding of itself would live.",
    category: "Institutions",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-08-21",
    readingTime: 7,
    body: [
      {
        type: "p",
        text: "A university's data architecture is usually a portrait of its org chart. Each function acquired the system it needed. Each system is competent within its boundary. Almost none were designed to answer a question that crosses boundaries — which is where nearly every important institutional question actually lives.",
      },
      { type: "h2", text: "The join that nobody owns" },
      {
        type: "p",
        text: "Asking why students in a particular program persist at higher rates requires curriculum sequencing, engagement patterns, advising history, financial context, and outcome data. Those live in five systems and three departments. The analysis is possible, but it is a project — commissioned, scoped, staffed, and delivered months later, after which the conditions have changed.",
      },
      {
        type: "quote",
        text: "Your institution is constantly creating data. An intelligence layer is what lets it learn from itself.",
      },
      { type: "h2", text: "What an intelligence layer is not" },
      {
        type: "list",
        items: [
          "Not a replacement for the SIS, LMS, or data warehouse. It reads from them.",
          "Not another interface for staff to check. Intelligence should arrive where decisions are already being made.",
          "Not a governance shortcut. It raises the stakes on access, consent, and purpose limitation, and should be designed accordingly.",
        ],
      },
    ],
  },
  {
    slug: "learning-intelligence-and-student-success",
    title: "Learning Intelligence and the Future of Student Success",
    deck:
      "Student success work is limited less by commitment than by timing and visibility.",
    excerpt:
      "Most student success teams are excellent at intervention and starved of early signal. Intelligence changes the timing of the conversation.",
    category: "Institutions",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-08-05",
    readingTime: 6,
    body: [
      {
        type: "p",
        text: "Student success has matured into a serious institutional discipline with real expertise and real infrastructure. Its constraint is rarely capability. It is that the signals arrive late, arrive coarse, and arrive without explanation.",
      },
      {
        type: "p",
        text: "A midterm grade is a late signal. An early-alert flag raised in week nine is a late signal. By then, the conditions that produced the concern have been in place for weeks, and the intervention has to work against accumulated distance rather than emerging friction.",
      },
      { type: "h2", text: "Earlier, and more explanatory" },
      {
        type: "p",
        text: "Comprehension signals collected inside the learning experience change both properties at once. They are available in week two rather than week nine, and they carry context — which concept, which environment, which pattern — so the outreach can be specific instead of generic.",
      },
      {
        type: "note",
        text: "Artifact does not claim to solve retention. We are researching how institutions can see the conditions surrounding success and risk earlier, and decide for themselves what to do about them.",
      },
    ],
  },
  {
    slug: "game-theory-and-learning-pathways",
    title: "The Role of Game Theory in Learning Pathways",
    deck:
      "Decision modeling offers a useful vocabulary for a problem education has always had.",
    excerpt:
      "Learning is a sequence of decisions made by multiple actors under uncertainty. That structure is well studied — and the tools built for it transfer more cleanly than expected.",
    category: "Predictive Learning",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-07-17",
    readingTime: 9,
    body: [
      {
        type: "p",
        text: "A semester is a long sequence of decisions. A student decides how to allocate attention. An instructor decides whether to move on or revisit. An advisor decides where to spend limited contact time. An administrator decides how to sequence a curriculum. Each decision changes the conditions the others operate under.",
      },
      {
        type: "p",
        text: "This is the structure that decision modeling and game theory were developed to describe: multiple actors, incomplete information, sequential choices, interdependent outcomes. The framing is not a metaphor — it is a reasonably precise description of the situation.",
      },
      { type: "h2", text: "What the framing makes visible" },
      {
        type: "list",
        items: [
          "Pathways as sequences. An outcome is the product of a chain of decisions, not a single moment.",
          "Interdependence. An instructional decision changes the payoff structure for every student in the room.",
          "Cost of information. Some signals are expensive to gather and change nothing; others are cheap and change a great deal.",
          "Leverage. Some points in a sequence disproportionately shape everything downstream. Finding them is the interesting problem.",
        ],
      },
      {
        type: "quote",
        text: "We are not trying to optimize students. We are trying to find the decisions that matter most.",
      },
      {
        type: "p",
        text: "The caution matters as much as the framing. Education is not a zero-sum game, learners are not rational agents maximizing a scalar utility, and treating them as such would produce both bad science and bad practice. We use the vocabulary of decision modeling to reason about sequence and leverage, not to reduce people to players.",
      },
    ],
  },
  {
    slug: "ethics-of-predictive-learning-systems",
    title: "The Ethics of Predictive Learning Systems",
    deck: "A system that anticipates can also constrain. Design decides which.",
    excerpt:
      "Predictive systems in education carry real risk: labeling, self-fulfilling prophecy, surveillance, and inherited bias. These are design problems before they are policy problems.",
    category: "Ethics & Design",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-06-24",
    readingTime: 10,
    body: [
      {
        type: "p",
        text: "Any system capable of anticipating an outcome is also capable of contributing to it. A student described as at risk may be treated differently, may be told, may internalize it, and may be routed toward a narrower set of options. The prediction participates in the reality it describes.",
      },
      { type: "h2", text: "Four risks we design against" },
      {
        type: "list",
        items: [
          "Labeling. A modeled likelihood is a description of conditions at a moment, not a property of a person. Language and interface must make that unmistakable.",
          "Self-fulfilling prophecy. Predictions influence behavior. Systems should be evaluated on whether flagged trajectories improved, not on predictive accuracy alone.",
          "Surveillance. Ambient measurement without meaningful consent damages the trust that learning depends on. Participation should be visible, understandable, and genuinely optional.",
          "Inherited bias. A model trained on historical outcomes learns historical inequity. Disparate impact must be tested for continuously and published internally.",
        ],
      },
      {
        type: "quote",
        text: "Intelligence should expand what a learner can see about themselves, not narrow what an institution expects of them.",
      },
      { type: "h2", text: "Purpose limitation as architecture" },
      {
        type: "p",
        text: "The most durable protection is structural rather than procedural. Signals collected to support learning should be architecturally incapable of becoming inputs to punitive processes. That is a schema and permissions decision made early, not a policy commitment made later.",
      },
    ],
  },
  {
    slug: "human-centered-ai-in-education",
    title: "Human-Centered AI in Education",
    deck:
      "The interesting question is not what the model can do. It is what the person does with it.",
    excerpt:
      "Human-centered AI in education is often reduced to a disclosure statement. Taken seriously, it is an architectural commitment about where authority sits.",
    category: "Ethics & Design",
    author: "Artifact Research",
    authorRole: "Artifact Intelligence",
    date: "2025-06-02",
    readingTime: 7,
    body: [
      {
        type: "p",
        text: "Most educational AI discourse is organized around capability. The more consequential question is one of authority: when a system produces an interpretation, who decides what it means and what happens next?",
      },
      { type: "h2", text: "Three commitments" },
      {
        type: "list",
        items: [
          "Intelligence informs; people decide. No consequential action is taken by the system alone.",
          "Every output is interrogable. A person can ask why, and receive an answer in the vocabulary of teaching rather than the vocabulary of modeling.",
          "The learner is a participant, not a subject. Learners see their own intelligence and can use it for their own purposes.",
        ],
      },
      {
        type: "quote",
        text: "A model that cannot explain itself to a professor has not earned a place in their classroom.",
      },
      {
        type: "p",
        text: "The third commitment is the one most often skipped. Systems built to inform institutions about learners, without informing learners about themselves, produce an asymmetry that is both ethically uncomfortable and practically wasteful — the person best positioned to act on the intelligence is the one denied access to it.",
      },
    ],
  },
];

export const getArticle = (slug: string) =>
  articles.find((a) => a.slug === slug);

export const featuredArticles = () =>
  articles.filter((a) => a.featured).slice(0, 3);

export const relatedArticles = (slug: string, limit = 3) => {
  const current = getArticle(slug);
  if (!current) return articles.slice(0, limit);
  const sameCategory = articles.filter(
    (a) => a.slug !== slug && a.category === current.category,
  );
  const rest = articles.filter(
    (a) => a.slug !== slug && a.category !== current.category,
  );
  return [...sameCategory, ...rest].slice(0, limit);
};

export const formatDate = (iso: string) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
