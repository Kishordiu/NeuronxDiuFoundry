export interface JudgeInfo {
  name: string;
  qualification: string;
  role: string;
  organization: string;
}

export interface TimelineItem {
  time: string;
  event: string;
  description: string;
}

export interface RuleItem {
  title: string;
  content: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface ContactInfo {
  organizer: string;
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
}

export interface EventConfig {
  eventName: string;
  organization: string;
  communityDescription: string;
  communityPartner: string;
  supportingPartner: string;
  duration: string;
  edition: string;
  date: string;
  tagline: string;
  description: string;
  registrationUrl: string;
  venue: string;
  venueUrl: string;
  ticketRefundable: boolean;
  problemStatementsRevealed: boolean;
  problemStatementReleaseText: string;
  prizePoolStatus: "secret" | "revealed";
  prizePoolRevealed: boolean;
  organizer: string;
  phone: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  contact: ContactInfo;
  judge: JudgeInfo;
  timeline: TimelineItem[];
  rules: RuleItem[];
  faq: FaqItem[];
  deadline: string;
  timezone: string;
}

export const eventConfig: EventConfig = {
  eventName: "NeuronX26",
  organization: "Neuro X Mind",
  communityDescription:
    "Neuro X Mind is a student builder community where curious minds come together to learn, experiment, and turn ideas into working products. We bring students together to build, collaborate, and grow through technology, creativity, and real-world experiences.",
  communityPartner: "DIU Foundry",
  supportingPartner: "Amirtha Jewellery",
  duration: "8-HOUR HACKATHON",
  edition: "8-HOUR HACKATHON",
  date: "October 3",
  tagline: "Build above the ordinary.",
  description: "Learn → Ideate → Build → Mentor → Iterate → Demo → Network",
  registrationUrl: "https://forms.gle/1E3cZtYEpjZnt9dm6",
  venue: "Shanmuga Industries Arts & Science College",
  venueUrl: "https://maps.app.goo.gl/xGJe6QcAXQEfrLxW8?g_st=ac",
  ticketRefundable: false,
  problemStatementsRevealed: false,
  problemStatementReleaseText: "Problem statements will be revealed one day before the hackathon.",
  prizePoolStatus: "secret",
  prizePoolRevealed: false,
  organizer: "Mukesh",
  phone: "+91 79043 36751",
  email: "neuroxmind2026@gmail.com",
  instagram: "neuro_x_mind_",
  instagramUrl: "https://instagram.com/neuro_x_mind_/",
  contact: {
    organizer: "Mukesh",
    phone: "+91 79043 36751",
    email: "neuroxmind2026@gmail.com",
    instagram: "neuro_x_mind_",
    instagramUrl: "https://instagram.com/neuro_x_mind_/",
  },
  judge: {
    name: "Ganesan Ravichandran",
    qualification: "MCA",
    role: "IT — Senior Manager",
    organization: "iD Freshfood",
  },
  timeline: [
    { time: "08:30 AM", event: "REGISTRATION & CHECK-IN", description: "Arrive at the venue, check in, and get settled with your team." },
    { time: "09:00 AM", event: "OPENING BRIEFING", description: "Welcome address, hackathon guidelines, and kickoff orientation." },
    { time: "09:30 AM", event: "HACKATHON COMMENCES", description: "The 8-hour build countdown begins. Start crafting your solution." },
    { time: "01:00 PM", event: "MIDPOINT CHECK & MENTORING", description: "Technical mentors review your progress and offer architectural feedback." },
    { time: "03:30 PM", event: "FINAL SPRINT & POLISH", description: "Feature lock, UI refinement, and preparing live demonstrations." },
    { time: "05:30 PM", event: "CODE FREEZE & SUBMISSION", description: "Submit your GitHub repository, project documentation, and presentation." },
    { time: "06:00 PM", event: "DEMO & EVALUATION", description: "Present your build and live demo to the official judge." },
    { time: "07:00 PM", event: "RESULTS & WRAP-UP", description: "Award ceremony, winner recognition, and closing remarks." },
  ],
  rules: [
    { title: "Eligibility", content: "Open to all university students with a passion for building." },
    { title: "Team Size", content: "Minimum 1, Maximum 4 members per team (including team leader)." },
    { title: "Registration Fee", content: "₹200 per person." },
    { title: "Duration", content: "This is strictly an 8-hour build experience." },
    { title: "Problem Statements", content: "Problem statements will be revealed one day before the hackathon." },
    { title: "Refund Policy", content: "The ticket fee is non-refundable." },
    { title: "Submission Requirements", content: "Presentation (PPT or PDF, max ~20MB) and a working GitHub repository link required." },
  ],
  faq: [
    {
      question: "What is the prize pool?",
      answer: "The total prize pool will be revealed later.",
    },
    {
      question: "Is the ticket fee refundable?",
      answer: "No. The ticket fee is non-refundable.",
    },
    {
      question: "How long is the hackathon?",
      answer: "NeuronX26 is an 8-hour hackathon.",
    },
    {
      question: "When will the problem statements be released?",
      answer: "The problem statements will be revealed one day before the hackathon.",
    },
    {
      question: "Where is the hackathon being conducted?",
      answer: "The official venue location is available on Google Maps.",
      ctaText: "VIEW VENUE ↗",
      ctaUrl: "https://maps.app.goo.gl/xGJe6QcAXQEfrLxW8?g_st=ac",
    },
    {
      question: "Who can participate?",
      answer: "The hackathon is open to all passionate builders, designers, and developers currently enrolled in a university.",
    },
    {
      question: "How many members can a team have?",
      answer: "A team can have a minimum of 1 and a maximum of 4 members, including the team leader.",
    },
    {
      question: "What is the registration fee?",
      answer: "The registration fee is ₹200 per person.",
    },
    {
      question: "What must we submit?",
      answer: "You must submit a presentation (PPT or PDF, max 20MB) and a GitHub repository link containing your project code.",
    },
    {
      question: "Where do we submit the project?",
      answer: "Submission is done via the participant portal. You will need to provide your GitHub URL and presentation.",
    },
  ],
  deadline: "2026-10-03T17:30:00+05:30",
  timezone: "Asia/Kolkata",
};
