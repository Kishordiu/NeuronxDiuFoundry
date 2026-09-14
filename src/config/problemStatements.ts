import { LucideIcon, Building, Scale, Headset, Mic, BookOpen } from "lucide-react";

export interface ProblemStatement {
  id: string;
  domain: string;
  title: string;
  context: string;
  whatWeWantToBuild: string[];
  groundRules: string[];
  judging: { weight: string; text: string }[];
  icon: LucideIcon;
  accentMetadata: string; // Used for UI colors
}

export const problemStatements: ProblemStatement[] = [
  {
    id: "proptech",
    domain: "PROPTECH / AI",
    title: "Forty Listings Open, Still No Idea Which One's Real",
    context: "Apartment hunting online is exhausting — half the listings are outdated, photos don't match reality, “hidden charges” show up after you've already visited, and there's no easy way to tell a decent deal from a scam until you've wasted a weekend chasing it.",
    whatWeWantToBuild: [
      "Cut through fake or stale listings — Given a set of listings (scraped or provided), flag ones that look suspicious — reused photos, price way below the area average, inconsistent details between the title and description — before the person wastes time on them.",
      "Match on what actually matters to that person — Instead of just filters (price, bedrooms), let the person describe what they want in plain language (“quiet, near a metro, okay with a longer commute for a better price”) and rank listings against that, explaining why each one fits or doesn't.",
      "Surface the hidden costs upfront — Parse listing descriptions and lease terms to pull out maintenance charges, deposit rules, notice periods — the stuff people usually find out too late — and show it clearly before they commit to a visit."
    ],
    groundRules: [
      "Use public/sample listing datasets or realistic self-generated ones — don't scrape live real estate sites without permission during the hackathon.",
      "Full-stack: real search/filter interface backed by an actual ranking and flagging pipeline, not a static list of pre-picked “good” listings.",
      "Scam/red-flag detection has to point to a specific reason, not just a vague “suspicious” label with nothing behind it.",
      "Handle inconsistent listing formats — different sources write descriptions differently, so the parsing can't assume one clean structure."
    ],
    judging: [
      { weight: "30%", text: "Quality of scam/red-flag detection with clear reasons" },
      { weight: "25%", text: "Relevance of matching to the person's actual stated needs" },
      { weight: "25%", text: "Does the full search-to-recommendation flow work end to end" },
      { weight: "20%", text: "Usefulness of the surfaced hidden-cost information" }
    ],
    icon: Building,
    accentMetadata: "from-blue-500/20 to-transparent border-blue-500/20"
  },
  {
    id: "legaltech",
    domain: "LEGAL TECH / AI",
    title: "Nobody Reads the Contract. That's the Problem.",
    context: "People sign things they don't understand because legal jargon is impenetrable. They miss bad clauses, aggressive termination terms, and sneaky renewals because reading 15 pages of legalese is too much effort.",
    whatWeWantToBuild: [
      "Turn legal text into plain language.",
      "Flag clauses that actually matter.",
      "Let users ask direct questions grounded in the actual contract.",
      "Every answer/flag must point back to the exact clause/section.",
      "Include the legal disclaimer.",
      "Do not use real personal/client legal documents.",
      "Full-stack upload → analysis → flagged clauses → Q&A."
    ],
    groundRules: [
      "Must not hallucinate — answers must be grounded in the text.",
      "Point back to the exact clause for any claim made.",
      "Must clearly state it is not a lawyer (disclaimer)."
    ],
    judging: [
      { weight: "25%", text: "Quality and accuracy of plain-language rewriting" },
      { weight: "30%", text: "Relevance of flagged clauses" },
      { weight: "25%", text: "Does the full upload-to-Q&A flow work end to end" },
      { weight: "20%", text: "Groundedness" }
    ],
    icon: Scale,
    accentMetadata: "from-amber-500/20 to-transparent border-amber-500/20"
  },
  {
    id: "enterprise",
    domain: "ENTERPRISE / AI",
    title: "Every Ticket Looks Urgent Until Someone Reads It",
    context: "Customer support teams are drowning in tickets. Everything is marked 'urgent', mixed with simple questions, complaints, and actual system failures. Agents waste time triaging instead of solving.",
    whatWeWantToBuild: [
      "classify ticket urgency/category",
      "detect frustration/churn risk",
      "prioritize tickets",
      "generate response drafts",
      "drafts must require human approval",
      "support sarcasm and mixed emotions",
      "working queue/dashboard",
      "no automatic sending"
    ],
    groundRules: [
      "Use a realistic mock dataset of support tickets.",
      "No auto-sending — must have human-in-the-loop approval.",
      "Must handle varied text (short, long, angry, sarcastic)."
    ],
    judging: [
      { weight: "30%", text: "Accuracy of urgency/category classification" },
      { weight: "25%", text: "Quality of churn/frustration detection" },
      { weight: "25%", text: "Does the full queue + dashboard work end to end" },
      { weight: "20%", text: "Usefulness and quality of drafted responses" }
    ],
    icon: Headset,
    accentMetadata: "from-emerald-500/20 to-transparent border-emerald-500/20"
  },
  {
    id: "edtech-interview",
    domain: "EDTECH / AI",
    title: "Practicing Alone in Front of a Mirror Doesn't Work",
    context: "Mock interviews are hard to arrange, and practicing alone doesn't prepare you for unexpected questions or behavioral follow-ups. You need someone to actually listen and react.",
    whatWeWantToBuild: [
      "real mock interview",
      "voice interaction",
      "spoken answers",
      "follow-up questions",
      "adaptive interviewer behavior",
      "answer feedback",
      "identify rambling / weak structure / missing examples",
      "adapt to role/domain",
      "handle pauses, ums, self-correction",
      "session history",
      "constructive specific feedback",
      "not merely a single LLM prompt"
    ],
    groundRules: [
      "Must support voice input (even if transcribed via standard Web APIs).",
      "Must actually react to what the user said with follow-ups, not just a script.",
      "Feedback must be specific ('at 1:20 you didn't explain the outcome'), not generic."
    ],
    judging: [
      { weight: "30%", text: "Quality and specificity of feedback given" },
      { weight: "25%", text: "How realistic the mock interview feels" },
      { weight: "25%", text: "Does the full voice-in, feedback-out pipeline work" },
      { weight: "20%", text: "Does it actually help someone improve" }
    ],
    icon: Mic,
    accentMetadata: "from-purple-500/20 to-transparent border-purple-500/20"
  },
  {
    id: "edtech-syllabus",
    domain: "EDTECH / AI",
    title: "The Syllabus Is 40 Pages. The Exam Is in 10 Days.",
    context: "Students get overwhelmed by massive syllabi and disorganized notes right before exams. They don't know where to start, what they're weak at, or how to pace themselves.",
    whatWeWantToBuild: [
      "convert syllabus/notes into day-by-day plan",
      "account for topic difficulty",
      "account for remaining time",
      "detect weak topics",
      "quizzes",
      "adapt study plan",
      "answer doubts using uploaded study material",
      "support at least two subjects in testing",
      "complete connected workflow",
      "trace answers to uploaded material where possible"
    ],
    groundRules: [
      "Must be able to process uploaded documents (PDF/Text).",
      "Plan must dynamically adjust if a student fails a quiz or skips a day.",
      "Answers to doubts must use the uploaded material to avoid generic responses."
    ],
    judging: [
      { weight: "25%", text: "Quality and realism of generated study plan" },
      { weight: "25%", text: "Does plan actually adapt based on performance" },
      { weight: "30%", text: "Does full upload-to-plan-to-doubt-solving flow work" },
      { weight: "20%", text: "Groundedness in student's own material" }
    ],
    icon: BookOpen,
    accentMetadata: "from-orange-500/20 to-transparent border-orange-500/20"
  }
];
