import Link from "next/link";
import { topics } from "@/lib/topics";

export default function Home() {
  const cardCount = topics.reduce((sum, topic) => sum + topic.cards.length, 0);

  return (
    <main className="app-shell">
      <header className="header">
        <div>
          <p className="eyebrow">Software engineering lead</p>
          <h1>Interview flashcards</h1>
          <p className="lede">
            Beginner-to-advanced technical questions, workplace scenarios, and
            HR guidance with short answers. Reveal a summary after trying it
            out loud.
          </p>
        </div>
        <div className="stats">
          <div className="stat">
            <strong>{topics.length}</strong>
            <span>topics</span>
          </div>
          <div className="stat">
            <strong>{cardCount}</strong>
            <span>cards</span>
          </div>
        </div>
      </header>

      <section className="topic-grid" aria-label="Review topics">
        {topics.map((topic) => (
          <Link key={topic.slug} href={`/topic/${topic.slug}`} className="topic-card">
            <span className="chip">{topic.cards.length} cards</span>
            <h2>{topic.title}</h2>
            <p>{topic.blurb}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
