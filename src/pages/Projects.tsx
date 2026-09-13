import { motion } from 'framer-motion';
import { ExternalLink, Github, Brain, Layers, Globe } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  url: string;
  github?: string;
  category: string;
  tech: string[];
}

const projects: Project[] = [
  {
    name: 'AI-Powered SaaS Platforms',
    description:
      'End-to-end Generative AI, LLM, RAG, and multi-agent workflows integrated into production SaaS and web applications at JohnCube.',
    url: 'https://github.com/PetruCTech',
    category: 'AI / ML',
    tech: ['Python', 'LangChain', 'RAG', 'LLMs', 'FastAPI'],
  },
  {
    name: 'Agent Framework (Python)',
    description:
      'Python agent framework exploring multi-agent orchestration patterns for intelligent automation and LLM-driven workflows.',
    url: 'https://github.com/PetruCTech/Agent-Framework-Python',
    github: 'https://github.com/PetruCTech/Agent-Framework-Python',
    category: 'AI / ML',
    tech: ['Python', 'AI Agents', 'LLMs'],
  },
  {
    name: 'Enterprise Web Applications',
    description:
      'Scalable enterprise apps for international clients with REST/event-driven services, CI/CD, Docker, and full-stack delivery at SDLC Corp.',
    url: 'https://github.com/PetruCTech',
    category: 'Full Stack',
    tech: ['React', 'Angular', 'Node.js', 'Python', 'PostgreSQL'],
  },
  {
    name: 'Next.js Dashboard',
    description:
      'Modern dashboard application built with Next.js, showcasing responsive UI patterns and production-ready frontend architecture.',
    url: 'https://github.com/PetruCTech/Dashboard_Next.js',
    github: 'https://github.com/PetruCTech/Dashboard_Next.js',
    category: 'Full Stack',
    tech: ['Next.js', 'React', 'TypeScript'],
  },
  {
    name: 'Code Ocean Research Platform',
    description:
      'Cloud research platform interfaces for Code Ocean @ Cornell — source code, datasets, experiment metadata, and computational results.',
    url: 'https://github.com/PetruCTech',
    category: 'Platform',
    tech: ['React', 'Node.js', 'REST APIs', 'JavaScript'],
  },
  {
    name: 'React Native ToDo',
    description:
      'Cross-platform mobile app demonstrating React Native patterns for interactive forms, navigation, and client-side state.',
    url: 'https://github.com/PetruCTech/ReactNative_ToDoList',
    github: 'https://github.com/PetruCTech/ReactNative_ToDoList',
    category: 'Platform',
    tech: ['React Native', 'JavaScript'],
  },
];

const categoryIcons: Record<string, React.ElementType> = {
  'AI / ML': Brain,
  'Full Stack': Layers,
  Platform: Globe,
};

const categoryColors: Record<string, string> = {
  'AI / ML': '#0ea5e9',
  'Full Stack': '#14b8a6',
  Platform: '#0284c7',
};

const Projects: React.FC = () => {
  const categories = ['AI / ML', 'Full Stack', 'Platform'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

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
            My Work
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selected work spanning AI/ML systems, enterprise full-stack platforms, and research tooling.
          </p>
        </motion.div>

        {categories.map((category, categoryIndex) => {
          const categoryProjects = projects.filter((p) => p.category === category);
          const CategoryIcon = categoryIcons[category];
          const categoryColor = categoryColors[category];

          return (
            <motion.section
              key={category}
              className="mb-12"
              initial="hidden"
              animate="visible"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + categoryIndex * 0.1 }}
              >
                <div
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${categoryColor}20` }}
                >
                  <CategoryIcon className="w-6 h-6" style={{ color: categoryColor }} />
                </div>
                <h2 className="text-xl md:text-2xl font-bold">{category}</h2>
              </motion.div>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                variants={containerVariants}
              >
                {categoryProjects.map((project) => (
                  <motion.div
                    key={project.name}
                    className="glass-card overflow-hidden group"
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                  >
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${categoryColor}40, ${categoryColor}10)`,
                        }}
                      >
                        <span className="text-5xl font-bold gradient-text">
                          {project.name.charAt(0)}
                        </span>
                      </div>

                      <motion.div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="glass-button flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View</span>
                        </motion.a>
                      </motion.div>

                      <div
                        className="absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium"
                        style={{
                          backgroundColor: `${categoryColor}30`,
                          color: categoryColor,
                        }}
                      >
                        {project.category}
                      </div>
                    </div>

                    <div className="p-4 md:p-5">
                      <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-sky-600 transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span key={tech} className="px-2 py-1 text-xs rounded-full glass-card">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <motion.a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-sky-600 hover:text-sky-500 transition-colors"
                          whileHover={{ x: 2 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Open</span>
                        </motion.a>
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            whileHover={{ x: 2 }}
                          >
                            <Github className="w-4 h-4" />
                            <span>Source</span>
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          );
        })}

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/PetruCTech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 glass-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>View More on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
