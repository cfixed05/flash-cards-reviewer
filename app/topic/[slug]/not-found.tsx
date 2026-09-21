import Link from "next/link";

export default function TopicNotFound() {
  return (
    <main className="app-shell">
      <p className="eyebrow">Missing topic</p>
      <h1>That deck is not in the JSON file.</h1>
      <p className="lede" style={{ marginBottom: "1.5rem" }}>
        Check the slug or pick another topic from the home page.
      </p>
      <Link href="/" className="button">
        Back to topics
      </Link>
    </main>
  );
}
