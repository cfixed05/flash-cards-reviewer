# Lead Interview Flashcards

A Next.js app for reviewing software engineering lead interviews. Topics and answers live in `data/topics.json`. There is no database.

Built-in topics: Java 8–21, OOP, Software Design, Spring, AWS, SQL, plus System Design, Leadership & Delivery, Concurrency, and Testing & Quality.

Each technical topic has 55 flashcards progressing from beginner to advanced. Behavioral and HR Interview Guide each have 50 cards covering workplace scenarios, answer structure, preparation, and practical hiring conversations.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit questions

Add or change curated cards in `data/topics.json`. Practical cards live in `lib/practical-questions.ts`. Each topic needs a unique `slug`, a title, a blurb, and a `cards` array of `{ id, question, answer }`.

The app has no API, database, authentication, or user-submitted HTML. Next.js response headers include a content security policy, clickjacking protection, MIME sniffing protection, a strict referrer policy, and a restricted permissions policy. Keep dependencies updated and never add credentials to the repository.

## Deploy on Vercel

1. Push this folder to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com](https://vercel.com), sign in, and **Add New → Project**.
3. Import the repo. Vercel detects Next.js automatically.
4. Click **Deploy**. Leave build settings as the defaults.

No environment variables are required. The JSON file is bundled at build time.
