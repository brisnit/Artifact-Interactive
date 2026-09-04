export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  deck: string;
  intro: string[];
  audiences: { label: string; note: string }[];
  problems: { title: string; body: string }[];
  focus: { index: string; title: string; body: string }[];
  signals: string[];
  caution: string;
  /**
   * Reserved imagery slots. A slot renders as a labelled placeholder plate
   * until `src` is supplied, at which point it renders the real photograph.
   */
  imagery: {
    label: string;
    caption: string;
    ratio: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
  meta: { label: string; value: string }[];
};

export const solutions: Solution[] = [
  {
    slug: "higher-education",
    name: "Higher Education",
    shortName: "Universities",
    title: "An intelligence layer for how a university actually learns.",
    deck:
      "Understand the learning environment across students, faculty, programs, curriculum, engagement, retention, and outcomes — and the conditions that surround each of them.",
    intro: [
      "A university already knows an enormous amount about itself. The difficulty is that the knowledge is distributed: the registrar holds one part, the LMS another, advising a third, and the faculty member who noticed the problem in week three holds a fourth that was never written down.",
      "Artifact researches and builds a bespoke intelligence layer for the specific institution — its programs, its pedagogy, its data ecosystem, and the decisions its people actually need to make.",
    ],
    audiences: [
      { label: "Presidents", note: "Institutional direction and evidence" },
      { label: "Provosts", note: "Academic quality and program performance" },
      { label: "Deans", note: "School-level patterns and curriculum design" },
      { label: "Faculty", note: "Concept-level insight into their own rooms" },
      { label: "Student success", note: "Earlier, more specific signal" },
      { label: "Institutional research", note: "A connected substrate to work from" },
      { label: "Students", note: "Intelligence about their own learning" },
    ],
    problems: [
      {
        title: "Retention",
        body: "Most retention signals arrive after the conditions that produced them have been in place for weeks. Artifact surfaces earlier signal and describes the conditions surrounding both persistence and risk.",
      },
      {
        title: "Engagement",
        body: "Logins and time-in-platform are proxies for attention, not measures of it. Concept-anchored signals describe engagement as a state that changes, not a count that accumulates.",
      },
      {
        title: "Learning outcomes",
        body: "Outcome data describes where students landed. Connected signal describes how they got there — and which parts of the environment consistently helped.",
      },
      {
        title: "Curriculum effectiveness",
        body: "Sequencing decisions are made once and evaluated rarely. Pattern recognition makes it visible where a sequence reliably produces friction and where it produces recovery.",
      },
      {
        title: "Faculty insight",
        body: "Experienced faculty read their rooms constantly, and that reading is lost the moment the session ends. Artifact gives that interpretation a structure it can persist in.",
      },
      {
        title: "Institutional knowledge",
        body: "Understanding of how a program actually works often lives with a handful of people. When they move, it goes with them. An intelligence layer holds it institutionally.",
      },
    ],
    focus: [
      {
        index: "01",
        title: "Concept-level comprehension",
        body: "Where understanding forms and where it stalls, located precisely enough to be actionable in the next session rather than the next term.",
      },
      {
        index: "02",
        title: "Program and cohort patterns",
        body: "How different populations move through the same curriculum, and where their experiences diverge in ways worth examining.",
      },
      {
        index: "03",
        title: "Advising intelligence",
        body: "Earlier, more specific context for the conversations student success teams are already having — so outreach can be about something.",
      },
      {
        index: "04",
        title: "Institutional research support",
        body: "A connected substrate that turns multi-month analysis projects into questions that can be asked directly.",
      },
    ],
    signals: [
      "Comprehension",
      "Confidence",
      "Confusion",
      "Participation",
      "Momentum",
      "Curriculum sequence",
      "Advising contact",
      "Persistence",
    ],
    caution:
      "Artifact does not promise to solve retention. Retention is the outcome of an enormous number of factors, many of which sit far outside a learning environment. What an intelligence layer can do is surface earlier signals and help an institution understand the conditions that surround both success and risk — so its own people can decide what to do about them.",
    imagery: [
      {
        label: "Campus photography",
        caption: "",
        // Native 3:2 — cropping to 4:3 would lose the tree and the reflection.
        ratio: "3/2",
        src: "/imagery/campus-quad.jpg",
        width: 1536,
        height: 1024,
        alt: "A university quadrangle at blue hour: a concrete and glass academic building with lit windows, a bare tree, and two figures crossing wet paving.",
      },
      {
        label: "Lecture hall",
        caption: "",
        ratio: "16/10",
        src: "/imagery/lecture-hall.jpg",
        width: 926,
        height: 579,
        alt: "A university lecture theatre mid-session: a lecturer at the board gesturing toward a projected diagram, students seated at tiered desks seen from behind.",
      },
    ],
    meta: [
      { label: "Environment", value: "Universities and colleges" },
      { label: "Scale", value: "Concept to institution" },
      { label: "Approach", value: "Bespoke, not templated" },
      { label: "Status", value: "Research and development" },
    ],
  },
  {
    slug: "high-schools",
    name: "High Schools",
    shortName: "High Schools",
    title: "Earlier visibility, while there is still time to use it.",
    deck:
      "Create earlier visibility into engagement, comprehension, learning behavior, and the pathways students are actually on — for the adults who are already trying to see them.",
    intro: [
      "In a high school, the people closest to a student usually notice something before any system does. A teacher senses disengagement. A counselor hears something in a conversation. The difficulty is that these observations are informal, unconnected, and easy to lose across six teachers and a full timetable.",
      "Artifact is researching how the naturally occurring signals of a school day can be structured well enough to be shared — carefully, and with appropriate governance — between the adults responsible for a student's support.",
    ],
    audiences: [
      { label: "Administrators", note: "School and district-level patterns" },
      { label: "Teachers", note: "Comprehension inside their own classrooms" },
      { label: "Counselors", note: "Earlier and more specific context" },
      { label: "Students", note: "Understanding of their own learning" },
      { label: "Families", note: "Meaningful visibility, where appropriate" },
    ],
    problems: [
      {
        title: "Late signal",
        body: "A grade at the end of a marking period is a summary of conditions that were in place weeks earlier. Comprehension signal describes those conditions while they are still current.",
      },
      {
        title: "Fragmented observation",
        body: "Six teachers each hold part of the picture, and no structure exists to assemble it. The pattern is often visible only in the aggregate no one can see.",
      },
      {
        title: "Engagement, not compliance",
        body: "Attendance and completion measure compliance. Whether a student is actually engaging with the material is a different question, and a more useful one.",
      },
      {
        title: "Support routing",
        body: "Support is finite. Understanding where it would make the most difference is a decision counselors make constantly, usually with incomplete information.",
      },
      {
        title: "Pathways",
        body: "Course selection and program choices compound over four years. Making those trajectories visible — as options rather than tracks — is one of the most consequential things a school can do.",
      },
      {
        title: "Transitions",
        body: "The moves between grade levels, schools, and post-secondary destinations are where context is most often lost, and where it would be most valuable.",
      },
    ],
    focus: [
      {
        index: "01",
        title: "Classroom comprehension",
        body: "Lightweight signal a teacher can read the same week, anchored to the concept rather than the assignment.",
      },
      {
        index: "02",
        title: "Cross-classroom view",
        body: "A student's experience assembled across their full timetable, so a pattern visible in three rooms is not missed in any one of them.",
      },
      {
        index: "03",
        title: "Counselor context",
        body: "Earlier, more specific context for conversations that would otherwise begin with a grade report.",
      },
      {
        index: "04",
        title: "Pathway visibility",
        body: "How course sequences and program choices open or narrow what is available later — surfaced while the choices are still ahead.",
      },
    ],
    signals: [
      "Comprehension",
      "Confusion",
      "Interest",
      "Participation",
      "Momentum",
      "Attendance",
      "Course sequence",
      "Support contact",
    ],
    caution:
      "Signals about minors carry a higher standard of care, not a lower one. Any high school deployment is governed by district policy, family consent, and strict purpose limitation — signals collected to support learning are architecturally separated from disciplinary processes. Where a school chooses not to extend visibility to families, the system respects that decision by design.",
    imagery: [
      {
        label: "Classroom photography",
        caption: "",
        // Native 3:2, matching the campus plate on Higher Education.
        ratio: "3/2",
        src: "/imagery/secondary-classroom.jpg",
        width: 1536,
        height: 1024,
        alt: "A secondary classroom between sessions: desks and chairs in cool afternoon light, a jacket over a chair back, and a teacher at the windows with their back to camera.",
      },
      {
        label: "Counseling context",
        caption: "Reserved for advising and student support settings.",
        ratio: "4/3",
      },
    ],
    meta: [
      { label: "Environment", value: "Secondary schools and districts" },
      { label: "Emphasis", value: "Earlier visibility" },
      { label: "Governance", value: "District policy and consent" },
      { label: "Status", value: "Research and development" },
    ],
  },
  {
    slug: "business",
    name: "Business & Workforce",
    shortName: "Businesses",
    title: "Understand how capability actually forms inside an organization.",
    deck:
      "Understand workforce learning, institutional knowledge, skills development, training effectiveness, and organizational capability — beyond completion rates.",
    intro: [
      "Most organizations can report how many people completed a training. Very few can explain whether capability changed, where knowledge is concentrated, or what happens to institutional understanding when an experienced team member leaves.",
      "The questions are the same ones a university asks, in a different environment: where does understanding form, what conditions support it, and what does the organization know about itself that it has never written down?",
    ],
    audiences: [
      { label: "Learning & development", note: "Effectiveness beyond completion" },
      { label: "HR", note: "Capability and workforce planning" },
      { label: "Leadership", note: "Organizational capability as evidence" },
      { label: "Training organizations", note: "Programme design and outcomes" },
      { label: "Employees", note: "Understanding of their own development" },
    ],
    problems: [
      {
        title: "Training effectiveness",
        body: "Completion is not capability. Comprehension and confidence signals, captured close to the work, describe whether something actually landed.",
      },
      {
        title: "Skills development",
        body: "Skill frameworks describe what an organization wants. Connected signal describes what is actually forming, and where the gap between the two sits.",
      },
      {
        title: "Knowledge transfer",
        body: "Expertise moves through organizations informally. Making that movement visible is the difference between a capability strategy and a hopeful one.",
      },
      {
        title: "Institutional knowledge",
        body: "When experienced people leave, understanding leaves with them. An intelligence layer makes visible what is concentrated in too few places.",
      },
      {
        title: "Employee development",
        body: "Development conversations are better when they are about evidence. Employees benefit most when they can see their own picture first.",
      },
      {
        title: "Capability development",
        body: "Organizational capability is an emergent property of many small learning events. It is measurable in aggregate, if the signal exists.",
      },
    ],
    focus: [
      {
        index: "01",
        title: "Signal close to the work",
        body: "Lightweight interactions inside real workflow rather than inside a separate learning platform, so the signal reflects application rather than recall.",
      },
      {
        index: "02",
        title: "Capability mapping",
        body: "Where specific capability actually sits across teams, functions, and regions — and where it is thinner than the org chart suggests.",
      },
      {
        index: "03",
        title: "Programme intelligence",
        body: "Which programme designs produce durable capability and which produce completion, evaluated against work outcomes rather than satisfaction scores.",
      },
      {
        index: "04",
        title: "Knowledge concentration",
        body: "Where institutional understanding is concentrated in individuals, and what an organization would lose if those people moved on.",
      },
    ],
    signals: [
      "Comprehension",
      "Confidence",
      "Relevance",
      "Application",
      "Knowledge transfer",
      "Programme design",
      "Role context",
      "Work outcomes",
    ],
    caution:
      "Employee learning signals are especially sensitive to purpose. Signals collected to develop capability should never become inputs to performance management, and the separation should be architectural rather than procedural. Where employees cannot see their own intelligence, the arrangement is measurement rather than development.",
    imagery: [
      {
        label: "Workplace learning",
        caption: "",
        // Native 3:2, matching the rest of the photographic set.
        ratio: "3/2",
        src: "/imagery/dealership-service.jpg",
        width: 1536,
        height: 1024,
        alt: "A dealership service workshop: three technicians grouped beneath a vehicle on a lift, the senior of them gesturing toward a component while holding a tablet.",
      },
      {
        label: "Team context",
        caption: "",
        ratio: "16/9",
        src: "/imagery/dealership-showroom.jpg",
        width: 1672,
        height: 941,
        alt: "A dealership showroom floor: a salesperson and a customer looking together at a tablet beside a vehicle, with colleagues working in the background.",
      },
    ],
    meta: [
      { label: "Environment", value: "Enterprises and training organizations" },
      { label: "Emphasis", value: "Capability, not completion" },
      { label: "Boundary", value: "Development, never performance management" },
      { label: "Status", value: "Research and development" },
    ],
  },
];

export const getSolution = (slug: string) =>
  solutions.find((s) => s.slug === slug);
