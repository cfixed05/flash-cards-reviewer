"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import type { Topic } from "@/lib/topics";

type FlashDeckProps = {
  topic: Topic;
};

export default function FlashDeck({ topic }: FlashDeckProps) {
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));

  const card = topic.cards[index];
  const total = topic.cards.length;
  const atStart = index === 0;
  const unseenCount = total - seen.size;

  const goTo = useCallback(
    (next: number) => {
      const clamped = Math.min(Math.max(next, 0), total - 1);
      setIndex(clamped);
      setRevealed(false);
      setSeen((current) => new Set(current).add(clamped));
    },
    [total],
  );

  const goToRandom = useCallback(() => {
    const candidates = topic.cards
      .map((_, cardIndex) => cardIndex)
      .filter((cardIndex) => !seen.has(cardIndex));
    const pool = candidates.length > 0 ? candidates : topic.cards.map((_, cardIndex) => cardIndex);
    const available = pool.filter((cardIndex) => cardIndex !== index);
    const next = available[Math.floor(Math.random() * available.length)] ?? index;

    setIndex(next);
    setRevealed(false);
    setSeen(candidates.length > 0 ? new Set(seen).add(next) : new Set([next]));
  }, [index, seen, topic.cards]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA"].includes(target.tagName)) {
        return;
      }

      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        setRevealed((value) => !value);
      } else if (event.key === "ArrowRight") {
        goTo(index + 1);
      } else if (event.key === "ArrowLeft") {
        goTo(index - 1);
      }
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goTo, index]);

  const progressLabel = useMemo(
    () => `Card ${index + 1} of ${total}`,
    [index, total],
  );

  return (
    <div className="flash-layout">
      <div className="progress-row">
        <span>{progressLabel}</span>
        <div className="dots" role="tablist" aria-label="Cards in this topic">
          {topic.cards.map((item, cardIndex) => (
            <button
              key={item.id}
              type="button"
              className={`dot${cardIndex === index ? " current" : ""}${seen.has(cardIndex) ? " seen" : ""}`}
              aria-label={`Go to card ${cardIndex + 1}`}
              aria-current={cardIndex === index ? "true" : undefined}
              onClick={() => goTo(cardIndex)}
            />
          ))}
        </div>
      </div>

      <article className="flash-card">
        <p className="eyebrow">{topic.title}</p>
        <h2 className="question">{card.question}</h2>

        {revealed ? (
          <p className="answer">{card.answer}</p>
        ) : (
          <p className="hidden-answer">Answer hidden. Reveal a short summary when you are ready.</p>
        )}

        <div className="actions">
          <button type="button" className="button" onClick={() => setRevealed((value) => !value)}>
            {revealed ? "Hide answer" : "Reveal answer"}
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={() => goTo(index - 1)}
            disabled={atStart}
          >
            Previous
          </button>
          <button
            type="button"
            className="button secondary"
            onClick={goToRandom}
            disabled={total < 2}
          >
            Next random
          </button>
        </div>
      </article>

      <p className="hint">
        {unseenCount > 0 ? `${unseenCount} unseen · ` : "All cards seen · "}
        Space or Enter to reveal · arrows to move
      </p>
    </div>
  );
}
