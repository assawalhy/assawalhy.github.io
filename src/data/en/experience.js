const experience = {
  experience: [
    {
      role: "Contract Software Engineer",
      company: "Bond Group",
      period: "Sep 2026 to Present",
      company_link: "https://adbond.sa",
      country: "Riyadh, KSA (Remote)",
      description: "Building a real estate CRM, and converting it into a SaaS product for brokers and developers.",
      responsibilities: [
        "Building a CRM for real estate brokers and developers as part of a two person team, with NestJS services, a Next.js front end, Drizzle ORM and PostgreSQL.",
        "Integrated Meta lead ads through the Business account, importing Facebook and Instagram campaign leads into the CRM.",
        "Built WhatsApp bots on n8n for four companies, connected to the CRM for lead capture and follow up automation, through the Meta WhatsApp Cloud API.",
        "Built the webhook lead intake API that Zapier and Make post to, with per-key field lists, idempotency and duplicate detection.",
        "Sends OTP codes over the Meta WhatsApp Cloud API.",
        "Connected viewing bookings to Google Calendar, and automated the follow up steps around them.",
        "The system is in production and has processed around 1,000 leads."
      ],
      technologies: ["TypeScript", "NestJS", "Next.js", "Drizzle ORM", "PostgreSQL", "n8n", "Zapier", "Make.com", "Meta Lead Ads", "WhatsApp Cloud API", "WhatsApp Bots", "Google Calendar"]
    },
    {
      role: "Backend Intern",
      company: "Taager",
      period: "Jun 2026 to Sep 2026",
      company_link: "https://taager.com",
      country: "Cairo, Egypt",
      description: "Applied Clean Architecture in a fast-ship agile environment.",
      responsibilities: [
        "Designed and maintained microservices communicating via Apache Pulsar.",
        "Maintained backend systems built with Node.js and Spring Boot Kotlin, working across both SQL (PostgreSQL) and NoSQL (MongoDB) databases.",
        "Applied Clean Architecture, DDD, and CQRS to maintain code modularity and enable parallel work in an agile, fast-ship environment.",
        "Achieved ~80% unit test coverage and wrote integration tests using Testcontainers and MockK.",
        "Gained working knowledge of CI/CD pipelines (ArgoCD), container orchestration (Kubernetes), and monitoring and observability (Datadog).",
        "Leveraged feature flags to progressively roll out features and run A/B experiments."
      ],
      technologies: ["TypeScript", "Node.js", "Kotlin", "Spring Boot", "Apache Pulsar", "PostgreSQL", "MongoDB", "Clean Architecture", "DDD", "CQRS", "Testcontainers", "MockK", "Docker", "Kubernetes", "ArgoCD", "Datadog", "Feature Flags"]
    },
    {
      role: "Frontend Engineer (part-time during B.Eng)",
      company: "SciCave",
      period: "Aug 2021 to May 2024",
      company_link: "https://scicave.com",
      country: "Cairo, Egypt",
      description: "Built web applications using modern technologies and managed cloud deployments.",
      responsibilities: [
        "Built web apps using TypeScript, React.js, Next.js, Tailwind CSS, and other web technologies.",
        "Tested the frontend using Cypress and CI/CD pipelines to automate quality checks and testing.",
        "Managed deployment using Docker and cloud services like AWS EC2.",
        "Designed UI/UX using Figma and collaborated on requirements gathering."
      ],
      technologies: ["TypeScript", "React.js", "Next.js", "Tailwind CSS", "Cypress", "Docker", "AWS", "Figma"]
    }
  ]
};
export default experience;
