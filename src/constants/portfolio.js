import images from "./images";

const portfolio = {
  hero: {
    name: "Petru Constantin",
    title: "Senior Full Stack AI/ML Engineer",
    intro:
      "I design and build scalable AI-powered SaaS platforms, web applications, and intelligent automation systems from architecture through production.",
    location: "Bucharest, Romania",
    stats: [
      { label: "Current focus", value: "AI/ML" },
      { label: "Delivery style", value: "End-to-end" },
      { label: "Years exp.", value: "10+" },
    ],
  },
  about: {
    title: "I ship AI-powered products that scale from idea to production",
    cards: [
      {
        title: "AI / ML Engineering",
        description:
          "Generative AI, LLMs, RAG pipelines, embeddings, semantic search, multi-agent orchestration, and intelligent automation.",
        imgUrl: images.about01,
      },
      {
        title: "Full-Stack Delivery",
        description:
          "React, Next.js, React Native, Node.js, FastAPI, and Django across SaaS, healthcare, EdTech, e-commerce, and enterprise software.",
        imgUrl: images.about02,
      },
      {
        title: "Cloud & DevOps",
        description:
          "AWS, Azure, Docker, Kubernetes, Terraform, and CI/CD with a focus on performance, observability, and high availability.",
        imgUrl: images.about03,
      },
      {
        title: "Technical Leadership",
        description:
          "System design, architecture decisions, code reviews, mentoring, and hands-on delivery with international product teams.",
        imgUrl: images.about04,
      },
    ],
  },
  work: {
    title: "Selected Capabilities",
    filters: ["AI / ML", "Full Stack", "Cloud", "All"],
    items: [
      {
        title: "Generative AI and RAG Platforms",
        description:
          "Integrated LLMs, AI agents, RAG, embeddings, and semantic search into production SaaS and web applications.",
        imgUrl: images.about01,
        tags: ["AI / ML"],
        projectLink: "https://www.linkedin.com/in/petru-c",
        codeLink: "https://github.com/PetruCTech",
      },
      {
        title: "AI-Powered SaaS Applications",
        description:
          "Led end-to-end development of scalable SaaS products spanning system design, backend, frontend, AI integration, and production support.",
        imgUrl: images.about02,
        tags: ["AI / ML", "Full Stack"],
        projectLink: "https://www.linkedin.com/in/petru-c",
        codeLink: "https://github.com/PetruCTech",
      },
      {
        title: "Event-Driven Microservices",
        description:
          "Built microservices and asynchronous workflows with RabbitMQ and Kafka for scalable, decoupled application architectures.",
        imgUrl: images.about03,
        tags: ["Full Stack", "Cloud"],
        projectLink: "https://www.linkedin.com/in/petru-c",
        codeLink: "https://github.com/PetruCTech",
      },
      {
        title: "Cloud-Native Delivery",
        description:
          "Deployed and operated production environments on AWS and Azure with Docker, CI/CD, monitoring, and high-availability design.",
        imgUrl: images.about04,
        tags: ["Cloud"],
        projectLink: "https://www.linkedin.com/in/petru-c",
        codeLink: "https://github.com/PetruCTech",
      },
    ],
  },
  skills: {
    featured: [
      { name: "Python", icon: images.python, bgColor: "#edf2f8" },
      { name: "React", icon: images.react, bgColor: "#edf2f8" },
      { name: "Next.js", icon: images.react, bgColor: "#edf2f8" },
      { name: "TypeScript", icon: images.typescript, bgColor: "#edf2f8" },
      { name: "Node.js", icon: images.node, bgColor: "#edf2f8" },
      { name: "GraphQL", icon: images.graphql, bgColor: "#edf2f8" },
      { name: "HTML/CSS", icon: images.css, bgColor: "#edf2f8" },
      { name: "Git", icon: images.git, bgColor: "#edf2f8" },
    ],
    experience: [
      {
        year: "2021 - Present",
        works: [
          {
            name: "Senior Full Stack & AI/ML Engineer",
            company: "JohnCube",
            desc:
              "Building Generative AI, LLM, RAG, and automation into production SaaS platforms while leading full-stack architecture, APIs, databases, cloud delivery, and technical mentoring.",
          },
        ],
      },
      {
        year: "2018 - 2021",
        works: [
          {
            name: "Full Stack Engineer",
            company: "SDLC Corp",
            desc:
              "Delivered enterprise web applications with React, Angular, TypeScript, Node.js, and Python, including REST APIs, databases, Docker, Jenkins/GitLab CI, and production support.",
          },
        ],
      },
      {
        year: "2016 - 2018",
        works: [
          {
            name: "Software Engineer Intern",
            company: "Code Ocean @ Cornell University",
            desc:
              "Built responsive research platform interfaces and Node.js/REST integrations supporting code, datasets, computational results, and scientific workflows.",
          },
        ],
      },
    ],
  },
  highlights: [
    {
      feedback:
        "Results-driven Senior Full-Stack and AI/ML Engineer with 10+ years of experience designing scalable AI-powered SaaS platforms, web applications, and intelligent automation systems.",
      name: "Profile",
      company: "AI/ML, Full Stack, Cloud",
    },
    {
      feedback:
        "Hands-on expertise across Python, FastAPI, Django, React, Next.js, PostgreSQL, LangChain, RAG, vector databases, AWS, Azure, Docker, and CI/CD.",
      name: "Core Stack",
      company: "Production-ready delivery",
    },
    {
      feedback:
        "Bachelor of Science in Computer Science from Cornell University.",
      name: "Education",
      company: "Cornell University",
    },
  ],
};

export default portfolio;
