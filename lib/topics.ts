import topicsData from "@/data/topics.json";
import { expandedQuestions } from "@/lib/expanded-questions";
import { practicalQuestions } from "@/lib/practical-questions";

export type Card = {
  id: string;
  question: string;
  answer: string;
};

export type Topic = {
  slug: string;
  title: string;
  blurb: string;
  cards: Card[];
};

const baseTopics = (topicsData.topics as Topic[]).map((topic) => ({
  ...topic,
  cards: topic.cards.concat(
    practicalQuestions[topic.slug] ?? [],
    expandedQuestions[topic.slug] ?? [],
  ),
}));

const guideTopics: Topic[] = [
  {
    slug: "behavioral",
    title: "Behavioral & Situational",
    blurb: "Practical workplace stories about conflict, ownership, teamwork, feedback, and leadership.",
    cards: [...(practicalQuestions.behavioral ?? []), ...(expandedQuestions.behavioral ?? [])],
  },
  {
    slug: "hr-interview-guide",
    title: "HR Interview Guide",
    blurb: "How to answer common HR questions clearly, honestly, and confidently.",
    cards: [...(practicalQuestions["hr-interview-guide"] ?? []), ...(expandedQuestions["hr-interview-guide"] ?? [])],
  },
];

export const topics = [...baseTopics, ...guideTopics];

export function getTopic(slug: string): Topic | undefined {
  return topics.find((topic) => topic.slug === slug);
}

export function getTopicSlugs(): string[] {
  return topics.map((topic) => topic.slug);
}
