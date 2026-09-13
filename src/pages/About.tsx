import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Code2, Rocket, Target, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI / ML Engineering',
      description: 'LLMs, RAG pipelines, embeddings, semantic search, and multi-agent orchestration in production.',
    },
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end SaaS and web apps with Python, FastAPI, Django, React, Next.js, and TypeScript.',
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Deploying and operating systems on AWS, Azure, Docker, Kubernetes, and CI/CD pipelines.',
    },
    {
      icon: Rocket,
      title: 'Scalable Architecture',
      description: 'Microservices, event-driven systems, multi-tenant SaaS, and high-availability design.',
    },
    {
      icon: Target,
      title: 'Domain Experience',
      description: 'Delivering solutions across healthcare, EdTech, e-commerce, real-estate, and enterprise software.',
    },
    {
      icon: Users,
      title: 'Technical Leadership',
      description: 'Mentoring engineers, leading architecture decisions, code reviews, and client collaboration.',
    },
  ];

  return (
    <div className="min-h-full px-4 py-8 particle-bg">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full glass-card text-sm text-sky-600 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            About Me
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let Me <span className="gradient-text">Introduce</span> Myself
          </h1>
        </motion.div>

        <motion.div
          className="glass-card p-6 md:p-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500 to-teal-500 blur-xl opacity-50"
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <div className="relative w-56 h-72 md:w-72 md:h-96 rounded-2xl overflow-hidden glass-card shadow-lg">
                  <img
                    src={`${import.meta.env.BASE_URL}profile.png`}
                    alt="Petru Constantin"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Hi, I&apos;m <span className="gradient-text">Petru Constantin</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-base md:text-lg leading-relaxed">
                  I&apos;m a results-driven{' '}
                  <span className="text-foreground font-medium">Senior Full-Stack &amp; AI/ML Engineer</span>{' '}
                  with 10+ years of experience designing scalable AI-powered SaaS platforms,
                  web applications, and intelligent automation systems.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  Strong expertise across Python, FastAPI, Django, PostgreSQL, React, Next.js,
                  and modern AI frameworks — including RAG, LLM integration, multi-agent
                  orchestration, and event-driven architectures.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  I deliver end-to-end solutions as both a hands-on engineer and technical leader,
                  with a focus on performance, observability, security, and scalable system design.
                </p>
              </div>

              <motion.div
                className="grid grid-cols-2 gap-4 mt-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Location</div>
                  <div className="font-medium">Bucharest, Romania</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Experience</div>
                  <div className="font-medium">10+ Years</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Education</div>
                  <div className="font-medium">B.S. CS, Cornell</div>
                </div>
                <div className="glass-card p-3">
                  <div className="text-sm text-muted-foreground">Languages</div>
                  <div className="font-medium">English (C1–C2)</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          className="glass-card p-6 md:p-8 mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <h2 className="text-xl md:text-2xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                role: 'Senior Full Stack & AI/ML Engineer',
                company: 'JohnCube',
                period: 'Aug 2021 – Present',
                location: 'Rybnik, Poland (Remote)',
                points: [
                  'Integrating Generative AI, LLMs, RAG, agents, and automation into production SaaS.',
                  'Leading end-to-end architecture, backend, frontend, AI integration, and deployment.',
                ],
              },
              {
                role: 'Full Stack Engineer',
                company: 'SDLC Corp',
                period: 'Sep 2018 – Aug 2021',
                location: 'Batavia, United States (Remote)',
                points: [
                  'Built enterprise web apps with React, Angular, TypeScript, Node.js, and Python.',
                  'Designed REST APIs, event-driven services, CI/CD, and Dockerized deployments.',
                ],
              },
              {
                role: 'Software Engineer Intern',
                company: 'Code Ocean @ Cornell University',
                period: 'Jul 2016 – Mar 2018',
                location: 'New York, NY (Hybrid)',
                points: [
                  'Developed research platform UIs and Node.js/REST services for scientific workflows.',
                ],
              },
            ].map((job) => (
              <div key={job.company} className="border-l-2 border-sky-500/40 pl-4 md:pl-6">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-semibold text-lg">{job.role}</h3>
                  <span className="text-sm text-muted-foreground">{job.period}</span>
                </div>
                <div className="text-sky-600 font-medium mb-2">
                  {job.company} · {job.location}
                </div>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="glass-card p-5 md:p-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.02, y: -4 }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-br from-sky-500/15 to-teal-500/15 group-hover:from-sky-500/25 group-hover:to-teal-500/25 transition-colors"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-sky-600" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
