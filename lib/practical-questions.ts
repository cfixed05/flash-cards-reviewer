import type { Card } from "@/lib/topics";

type PracticalQuestions = Record<string, Card[]>;

export const practicalQuestions: PracticalQuestions = {
  "java-8-21": [
    {
      id: "java-practical-1",
      question: "How would you validate a username before saving it?",
      answer: "Trim it, check that it is not blank, enforce a length and allowed-character rule, and return a clear validation error. Keep the same rule at the database boundary with a suitable constraint.",
    },
    {
      id: "java-practical-2",
      question: "How would you remove duplicate names from a Java List?",
      answer: "Use a Set when order does not matter, or a LinkedHashSet when you want to keep the first-seen order, then create a List if the method contract requires one.",
    },
    {
      id: "java-practical-3",
      question: "A Java method sometimes receives null. How do you prevent a NullPointerException?",
      answer: "Validate required arguments at the boundary, use a clear default only when the business rule allows it, and use Optional for a returned value that may be absent. Do not silently turn every null into an empty value.",
    },
    {
      id: "java-practical-4",
      question: "How would you read a text file in a Java application?",
      answer: "Use a try-with-resources block so the file closes automatically, choose the correct character set such as UTF-8, and handle or propagate IOException with useful context.",
    },
    {
      id: "java-practical-5",
      question: "Why should a Java service use BigDecimal for money?",
      answer: "Floating-point types can introduce rounding errors, so use BigDecimal with an explicit scale and rounding mode. Keep currency and monetary calculations consistent across the service.",
    },
  ],
  oop: [
    {
      id: "oop-practical-1",
      question: "A service class has 20 methods and handles orders, email, and reports. What would you do?",
      answer: "Group behavior by responsibility, identify the data and invariants each group owns, then extract collaborators behind small interfaces. Move one use case at a time and protect behavior with tests.",
    },
    {
      id: "oop-practical-2",
      question: "How do you stop callers from creating an invalid payment object?",
      answer: "Require the needed values in a constructor or factory, validate them there, and expose behavior instead of public setters. Represent states such as approved or failed explicitly.",
    },
    {
      id: "oop-practical-3",
      question: "When would you use composition in a real backend feature?",
      answer: "Use it when behavior can vary independently, such as a checkout service composed with tax, pricing, and payment policies. Each collaborator can be tested and replaced without subclass surprises.",
    },
    {
      id: "oop-practical-4",
      question: "A class has many boolean flags and combinations are confusing. How do you improve it?",
      answer: "Replace invalid combinations with named types or a small state model. Make transitions explicit and enforce the allowed transitions in one place.",
    },
    {
      id: "oop-practical-5",
      question: "How do you review an object model before it becomes shared code?",
      answer: "Ask what invariant it owns, who may change it, and which use cases it supports. Check naming, ownership, construction, and whether the public API exposes implementation details.",
    },
  ],
  "software-design": [
    {
      id: "design-practical-1",
      question: "A new feature touches the controller, service, repository, and three clients. How do you reduce risk?",
      answer: "Define the use-case boundary, isolate external clients behind ports, and make the change in small slices. Add contract tests around clients and keep the domain decision independent of transport details.",
    },
    {
      id: "design-practical-2",
      question: "When is a modular monolith the practical choice for a small Philippine startup?",
      answer: "Choose it when one team owns the product and independent scaling is not proven. Enforce module APIs and ownership first; extract a service only when a real release, scale, or failure boundary appears.",
    },
    {
      id: "design-practical-3",
      question: "How would you design a retry for an external payment API?",
      answer: "Use timeouts, bounded retries with jitter, and an idempotency key. Persist the payment attempt and reconcile uncertain results instead of charging again after a timeout.",
    },
    {
      id: "design-practical-4",
      question: "A shared utility package keeps growing. How do you handle it?",
      answer: "Move code toward the domain that owns it, delete unused helpers, and keep only genuinely cross-cutting stable primitives in the shared package. Shared code needs an owner and review bar.",
    },
    {
      id: "design-practical-5",
      question: "What is a simple way to document a backend design decision?",
      answer: "Write the context, decision, alternatives, consequences, and rollback or revisit trigger in a short ADR. Link it from the code or module README.",
    },
  ],
  spring: [
    {
      id: "spring-practical-1",
      question: "A Spring endpoint works locally but returns 500 in production. What is your first process?",
      answer: "Check the correlation ID and structured logs, compare active configuration and bean conditions, then inspect dependency and database health. Avoid logging secrets or blindly changing production values.",
    },
    {
      id: "spring-practical-2",
      question: "Where should a transaction begin when placing an order?",
      answer: "Put it around the service use case that changes the order and inventory records. Keep remote calls outside it when possible, and use an outbox or retryable workflow for integration events.",
    },
    {
      id: "spring-practical-3",
      question: "How do you validate a request in a Spring REST API?",
      answer: "Use Bean Validation at the edge, return a consistent Problem Details response, and keep business-rule validation in the domain or service layer. Never return stack traces to clients.",
    },
    {
      id: "spring-practical-4",
      question: "Why might a singleton Spring service cause a production bug?",
      answer: "A singleton is shared across requests, so mutable request or user state can leak between users. Keep services stateless and pass request-specific values as method arguments.",
    },
    {
      id: "spring-practical-5",
      question: "How do you prevent a Spring app from failing all requests when a downstream API is slow?",
      answer: "Set connection and response timeouts, bound the client pool, use a circuit breaker or bulkhead, and degrade safely. Monitor timeout rate and queue depth.",
    },
  ],
  aws: [
    {
      id: "aws-practical-1",
      question: "How would you store uploaded IDs or receipts securely in AWS?",
      answer: "Use a private encrypted S3 bucket, short-lived signed URLs, least-privilege roles, malware scanning where required, and separate production access from developer access.",
    },
    {
      id: "aws-practical-2",
      question: "A service needs to process orders even when it is temporarily down. What AWS service pattern fits?",
      answer: "Publish an event to SNS or EventBridge and give the consumer its own SQS queue with retries and a DLQ. Make the consumer idempotent and monitor queue age.",
    },
    {
      id: "aws-practical-3",
      question: "How do you keep AWS credentials out of a Spring application?",
      answer: "Use IAM roles for ECS tasks, Lambda, or EC2 and retrieve credentials through the SDK provider chain. Do not commit keys, put them in frontend code, or use long-lived user keys in production.",
    },
    {
      id: "aws-practical-4",
      question: "What do you check when an AWS bill suddenly increases?",
      answer: "Compare daily cost by service and tag, then inspect data transfer, NAT gateways, logs, idle resources, and request volume. Add budgets and anomaly alerts after identifying the cause.",
    },
    {
      id: "aws-practical-5",
      question: "How would you expose a private Spring API to internet users?",
      answer: "Put an HTTPS load balancer or API Gateway in front, keep app tasks in private subnets, restrict security groups, and use WAF, authentication, rate limits, and centralized logs.",
    },
  ],
  sql: [
    {
      id: "sql-practical-1",
      question: "A customer list endpoint became slow as the table grew. What do you do?",
      answer: "Capture the real query and parameters, run EXPLAIN ANALYZE on production-like data, check indexes and row estimates, then add or change the index and verify the plan.",
    },
    {
      id: "sql-practical-2",
      question: "How do you safely add a required column to a large production table?",
      answer: "Use expand and contract: add it nullable, deploy code that writes it, backfill in batches, validate, then enforce not-null in a later migration.",
    },
    {
      id: "sql-practical-3",
      question: "Two checkout requests bought the last item. How do you prevent it?",
      answer: "Use a transaction with an optimistic version or row lock, check stock in the database, and enforce a constraint where possible. Test concurrent requests against a real database.",
    },
    {
      id: "sql-practical-4",
      question: "Why should an order keep the item price instead of reading today’s catalog price?",
      answer: "An order is a historical record. Store the agreed description, currency, tax, and unit price on the order line so later catalog changes cannot rewrite financial history.",
    },
    {
      id: "sql-practical-5",
      question: "What is a safe way to handle a database migration that may fail?",
      answer: "Make it backward-compatible, test it on a production-sized copy, take a rollback or recovery path, monitor lock time, and separate destructive cleanup from the deploy.",
    },
  ],
  "system-design": [
    {
      id: "system-practical-1",
      question: "How would you design an appointment booking API for users in different Philippine time zones?",
      answer: "Store instants in UTC, store the venue or user time zone separately, convert only at the edges, and enforce availability atomically in the database.",
    },
    {
      id: "system-practical-2",
      question: "A mobile client retries after a network timeout and creates two orders. How do you fix it?",
      answer: "Require an idempotency key, store the request hash and result, and return the original result for the same key. Add a unique business constraint as a final guard.",
    },
    {
      id: "system-practical-3",
      question: "When should a product search use a database query versus a search service?",
      answer: "Use the database for simple filtered queries and modest scale. Use a search service when relevance, typo tolerance, faceting, or independent read scale justify the operational cost.",
    },
    {
      id: "system-practical-4",
      question: "How do you design a file upload flow without sending large files through the API?",
      answer: "Authorize an upload, issue a short-lived signed object URL, upload directly to storage, then verify size, type, ownership, and scan status before making the file usable.",
    },
    {
      id: "system-practical-5",
      question: "What should happen when a downstream service is unavailable during checkout?",
      answer: "Fail safely with a clear status, avoid duplicate charges, record the attempt, and reconcile asynchronously if the result is uncertain. Do not hide an incomplete payment as success.",
    },
  ],
  leadership: [
    {
      id: "lead-practical-1",
      question: "A production incident happens during a public holiday. What do you do as the lead?",
      answer: "Start the incident process, assign an incident commander, restore service first, communicate impact and next update, and rotate people so nobody is expected to work indefinitely.",
    },
    {
      id: "lead-practical-2",
      question: "How do you handle a teammate who repeatedly misses estimates?",
      answer: "Discuss the pattern privately, ask what is causing uncertainty, split work smaller, and agree on an observable change. Review progress without turning estimates into punishment.",
    },
    {
      id: "lead-practical-3",
      question: "A product deadline conflicts with a serious security finding. What do you do?",
      answer: "Explain the exploitability and user impact, involve security and product, and reduce scope or move the date. Do not quietly accept a known severe risk to hit a date.",
    },
    {
      id: "lead-practical-4",
      question: "How do you run a useful code review for a teammate working remotely?",
      answer: "Review the stated risk and behavior, ask precise questions in writing, pair on ambiguous parts, and avoid judging communication style or time zone. Keep feedback specific and actionable.",
    },
    {
      id: "lead-practical-5",
      question: "How do you decide whether to hire or train for a backend skill gap?",
      answer: "Assess urgency, existing strengths, mentoring capacity, and the long-term team need. Create a learning plan when the gap is teachable; hire when the risk or timeline cannot absorb it.",
    },
  ],
  concurrency: [
    {
      id: "concurrency-practical-1",
      question: "A counter is occasionally wrong under load. What do you suspect?",
      answer: "Look for a check-then-act race or unsafely shared mutable state. Reproduce with concurrent tests, inspect thread dumps and metrics, then use atomic operations, a lock, or a database constraint.",
    },
    {
      id: "concurrency-practical-2",
      question: "How do you stop one slow partner API from exhausting a Spring thread pool?",
      answer: "Set timeouts, bound concurrency, isolate the partner with a bulkhead, and reject or queue excess work. Monitor active threads, queue depth, and timeout rate.",
    },
    {
      id: "concurrency-practical-3",
      question: "When is a message queue better than an async task in the same JVM?",
      answer: "Use a queue when work must survive a restart, be retried, or be processed independently. In-process tasks are suitable for short work whose result belongs to the current request.",
    },
    {
      id: "concurrency-practical-4",
      question: "How do you investigate a deadlock reported in production?",
      answer: "Capture thread and database lock dumps, identify the cycle and owners, then fix lock ordering or shorten the critical section. Avoid restarting before collecting evidence unless impact demands it.",
    },
    {
      id: "concurrency-practical-5",
      question: "What is a practical use for an atomic type in Java?",
      answer: "Use it for a simple independent value such as a counter or state flag. For multiple related values or a compound invariant, use a lock or a transaction instead.",
    },
  ],
  "testing-quality": [
    {
      id: "testing-practical-1",
      question: "What test would you add after fixing a duplicate-payment bug?",
      answer: "Add an integration test that sends the same idempotency key twice and asserts one charge and the same response. Test a concurrent retry against a real database or payment fake.",
    },
    {
      id: "testing-practical-2",
      question: "How do you test a Spring endpoint without making the test slow?",
      answer: "Use a focused web slice test for validation, status, and response shape, then keep a smaller number of integration tests for the real database and security wiring.",
    },
    {
      id: "testing-practical-3",
      question: "A test passes locally but flakes in CI. What do you inspect?",
      answer: "Check shared state, timing, random ordering, time zones, external dependencies, and parallel execution. Replace sleeps with synchronization and capture logs or seeds for reproduction.",
    },
    {
      id: "testing-practical-4",
      question: "What should a useful pull request include besides code?",
      answer: "The behavior changed, test evidence, migration or rollout notes, observability impact, and a rollback plan. Keep the change focused so reviewers can reason about its risk.",
    },
    {
      id: "testing-practical-5",
      question: "How do you test an order flow that calls a third-party service?",
      answer: "Use a deterministic fake or contract stub for most tests, add a small integration suite against a sandbox, and test timeout, retry, invalid response, and duplicate-request behavior.",
    },
  ],
  behavioral: [
    { id: "behavioral-practical-01", question: "Tell me about a time you received difficult feedback.", answer: "Use STAR: explain the situation, the feedback, what you changed, and the measurable result. Show ownership without arguing against the feedback." },
    { id: "behavioral-practical-02", question: "Tell me about a time you disagreed with your manager.", answer: "Describe the issue respectfully, the evidence you shared, the decision that was made, and how you supported the final direction." },
    { id: "behavioral-practical-03", question: "Tell me about a time you had to learn something quickly.", answer: "Give a specific deadline, explain your learning plan, and finish with how you applied the skill and helped the team afterward." },
    { id: "behavioral-practical-04", question: "How do you respond when a teammate is struggling?", answer: "Check in privately, ask what support they need, agree on a concrete next step, and follow up. Escalate only when delivery, safety, or wellbeing requires it." },
    { id: "behavioral-practical-05", question: "Tell me about a time you improved a process.", answer: "Quantify the old problem, explain the small change you introduced, and show the result in time saved, fewer errors, or faster delivery." },
    { id: "behavioral-practical-06", question: "What do you do when you make a mistake?", answer: "Acknowledge it early, reduce its impact, communicate facts, fix the cause, and share a prevention step. Avoid blaming a person or hiding the issue." },
    { id: "behavioral-practical-07", question: "How do you work with someone whose communication style differs from yours?", answer: "Agree on the information and cadence needed, adapt your communication, and judge the collaboration by shared outcomes rather than personal style." },
    { id: "behavioral-practical-08", question: "Tell me about a time you had to say no.", answer: "Explain the competing priorities and risk, offer a viable alternative or later date, and make sure the decision is understood by the affected people." },
    { id: "behavioral-practical-09", question: "How do you make meetings more inclusive?", answer: "Share context in advance, invite quieter voices without putting people on the spot, make decisions visible, and provide an async way to contribute." },
    { id: "behavioral-practical-10", question: "What makes someone a good teammate?", answer: "Reliability, clear communication, respect for different viewpoints, willingness to ask for help, and a habit of improving the team rather than only personal output." },
  ],
  "hr-interview-guide": [
    { id: "hr-practical-01", question: "How should you answer 'Tell me about yourself' in an HR interview?", answer: "Give a two-minute present-past-future summary: your current focus, relevant experience, and why this role is the next logical step. Do not recite your whole resume." },
    { id: "hr-practical-02", question: "How should you answer 'Why do you want to work here?'", answer: "Connect one specific company or role need to your experience and motivation. Show that you researched the company without sounding like you memorized marketing copy." },
    { id: "hr-practical-03", question: "How do you answer a salary-expectation question in the Philippines?", answer: "Give a researched range based on role, scope, location, and total package, then say you are open to discussing the complete offer. Do not invent competing offers." },
    { id: "hr-practical-04", question: "How do you explain your notice period?", answer: "State the contractual notice period and your earliest realistic start date. If you can negotiate an earlier release, say it is possible but do not promise what you cannot control." },
    { id: "hr-practical-05", question: "How should you explain a career gap?", answer: "Answer briefly and honestly, explain what you did during the gap, and bring the conversation back to the skills and readiness you now bring to the role." },
    { id: "hr-practical-06", question: "What is a good answer to 'What is your weakness?'", answer: "Choose a real but manageable weakness, explain the system you use to improve it, and give evidence of progress. Avoid disguised strengths such as 'I work too hard.'" },
    { id: "hr-practical-07", question: "How do you answer questions about leaving your current job?", answer: "Stay factual and respectful: describe the next responsibility or environment you seek. Never insult a former manager or disclose confidential information." },
    { id: "hr-practical-08", question: "What should you ask HR at the end of the interview?", answer: "Ask about the hiring timeline, onboarding, performance expectations, team structure, benefits, work arrangement, and what success looks like in the first six months." },
    { id: "hr-practical-09", question: "How do you discuss remote, hybrid, or onsite work preferences?", answer: "State your preference clearly, then explain how you maintain availability, collaboration, and delivery. Confirm the company's actual policy rather than assuming flexibility." },
    { id: "hr-practical-10", question: "How do you prepare references?", answer: "Ask permission first, brief references on the role and achievements, and provide current contact details. Choose people who can speak specifically about your work and character." },
  ],
};
