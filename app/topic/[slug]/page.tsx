import Link from "next/link";
import { notFound } from "next/navigation";
import FlashDeck from "@/components/FlashDeck";
import { getTopic, getTopicSlugs } from "@/lib/topics";

type TopicPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getTopicSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);
  return {
    title: topic ? `${topic.title} · Lead Interview Flashcards` : "Topic not found",
  };
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { slug } = await params;
  const topic = getTopic(slug);

  if (!topic) {
    notFound();
  }

  return (
    <main className="app-shell">
      <Link href="/" className="back-link">
        ← All topics
      </Link>
      <p className="eyebrow">Practice out loud</p>
      <h1>{topic.title}</h1>
      <p className="lede" style={{ marginBottom: "1.75rem" }}>
        {topic.blurb}
      </p>
      <FlashDeck topic={topic} />
    </main>
  );
}
