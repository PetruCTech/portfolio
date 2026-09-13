import { motion } from 'framer-motion';
import {
  Brain,
  Cloud,
  Code2,
  Database,
  HandshakeIcon,
  MessageCircle,
  Users,
  Lightbulb,
  Target,
} from 'lucide-react';

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

const skillIcons: Record<string, React.FC<IconProps>> = {
  Python: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.372 0 5.374 2.656 5.374 2.656l.001 2.75h6.64v.826H3.58S0 5.977 0 12.001c0 6.023 3.003 5.99 3.003 5.99h1.794v-2.88s-.096-3.003 2.955-3.003h5.088s2.86.048 2.86-2.764V2.656S16.047 0 12 0zm-3.15 1.61a1.06 1.06 0 110 2.12 1.06 1.06 0 010-2.12zM18.203 6.01h-1.794v2.88s.096 3.003-2.955 3.003H8.366s-2.86-.048-2.86 2.764v5.686S5.953 24 12 24c6.628 0 6.626-2.656 6.626-2.656l-.001-2.75h-6.64v-.826h8.435S24 18.023 24 11.999c0-6.023-3.003-5.99-3.003-5.99h-2.794zm-3.053 14.26a1.06 1.06 0 110-2.12 1.06 1.06 0 010 2.12z" />
    </svg>
  ),
  TypeScript: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.66 3.66 0 0 0-.643-.361 5.209 5.209 0 0 0-.717-.26 5.748 5.748 0 0 0-1.428-.2c-.865 0-1.504.21-1.917.63-.413.42-.62.986-.62 1.698 0 .605.184 1.076.552 1.413.368.337.905.58 1.61.73l.9.18c1.02.206 1.79.515 2.31.927.52.413.78 1.005.78 1.777 0 .887-.313 1.606-.94 2.156-.626.55-1.546.825-2.76.825-.788 0-1.52-.098-2.196-.294a8.652 8.652 0 0 1-1.819-.83v-2.518a4.284 4.284 0 0 0 2.3 1.05c.8.104 1.497.157 2.09.157.854 0 1.482-.189 1.884-.566.402-.378.603-.878.603-1.5 0-.671-.237-1.154-.71-1.45-.473-.297-1.24-.52-2.3-.67l-.9-.18c-.958-.19-1.671-.49-2.139-.9-.468-.41-.702-.992-.702-1.746 0-.85.326-1.545.977-2.084.651-.54 1.573-.81 2.767-.81zm-9.238 1.18h5.04v2.183H9.97v9.637H7.373V10.93z" />
    </svg>
  ),
  JavaScript: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.625-1.065-2.773-.975-1.213.105-2.287.72-2.854 1.635-.675 1.087-.525 2.52.345 3.39.75.75 1.845 1.125 2.865 1.41.72.195 1.2.48 1.11.99-.09.57-.66.87-1.455.795-.63-.06-1.215-.27-1.605-.69l-1.77 1.02c.42.525 1.02.99 1.89 1.245 1.305.375 2.79.09 3.615-.945.525-.675.615-1.53.39-2.49z" />
    </svg>
  ),
  React: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z" />
    </svg>
  ),
  NextJS: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.572 0c-.176 0-.31.142-.31.32v20.74c0 .177.134.32.31.32.088 0 .167-.037.226-.096l9.304-9.304c.12-.12.12-.314 0-.434L11.798.096A.313.313 0 0 0 11.572 0zm.856 2.267 7.77 7.77-7.77 7.77V2.267zM0 11.572c0-.088.037-.167.096-.226l9.304-9.304A.313.313 0 0 1 9.64 2.267v19.466a.313.313 0 0 1-.534.226L.096 12.655A.313.313 0 0 1 0 12.428v-.856z" />
    </svg>
  ),
  NodeJS: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.45 1.7.45 1.38 0 2.17-.84 2.17-2.3V8.03c0-.12-.1-.22-.22-.22H7.5c-.13 0-.23.1-.23.22v8.35c0 .65-.67 1.3-1.77.75L3.42 16c-.1-.06-.16-.16-.16-.27V7.15c0-.11.06-.22.16-.28l7.44-4.3c.1-.05.22-.05.31 0l7.44 4.3c.1.06.16.17.16.28v8.58c0 .11-.06.22-.16.27l-7.44 4.3c-.1.06-.22.06-.31 0l-1.89-1.1c-.08-.05-.19-.06-.27-.02-.74.38-1.01.45-1.51.45-.52 0-1.03-.2-1.39-.55l-1.95-1.13c-.48-.28-.78-.8-.78-1.36v-4.3c0-.56.3-1.08.78-1.36l1.95-1.12c.36-.21.8-.21 1.17 0l1.95 1.12c.48.28.78.8.78 1.36v3.4c0 .12.1.22.22.22h.78c.12 0 .22-.1.22-.22v-3.4c0-.56-.3-1.08-.78-1.36l-1.95-1.12c-.47-.27-1.06-.27-1.53 0l-1.95 1.12c-.48.28-.78.8-.78 1.36v4.3c0 .56.3 1.08.78 1.36l1.95 1.12c.54.32 1.2.48 1.86.48.62 0 1.24-.14 1.84-.48l7.44-4.3c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
    </svg>
  ),
  Tailwind: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  MongoDB: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
    </svg>
  ),
  PostgreSQL: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.48 9.14c-.34-.75-1.1-1.2-2.36-1.38l-.16-.02c-.34-.04-.7-.06-1.06-.06-1.12 0-2.14.3-2.98.84-.84-.54-1.86-.84-2.98-.84-.36 0-.72.02-1.06.06l-.16.02c-1.26.18-2.02.63-2.36 1.38-.34.75-.2 1.72.42 2.88.58 1.1 1.6 2.28 2.96 3.4.34.28.72.54 1.12.78-.08.26-.14.52-.18.8-.18 1.24.28 2.2 1.28 2.68.34.16.72.24 1.12.24.66 0 1.32-.22 1.86-.62.54.4 1.2.62 1.86.62.4 0 .78-.08 1.12-.24 1-.48 1.46-1.44 1.28-2.68-.04-.28-.1-.54-.18-.8.4-.24.78-.5 1.12-.78 1.36-1.12 2.38-2.3 2.96-3.4.62-1.16.76-2.13.42-2.88z" />
    </svg>
  ),
  Docker: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.005a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.185-.185V6.29a.186.186 0 00-.186-.186H8.1a.185.185 0 00-.185.186v1.887c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.186-.185V6.29a.186.186 0 00-.186-.186H5.136a.185.185 0 00-.185.186v1.887c0 .102.082.185.185.185m5.893 2.715h2.118a.186.186 0 00.186-.185V9.005a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.186v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.186.186 0 00.185-.185V9.005a.186.186 0 00-.186-.186H8.1a.185.185 0 00-.185.186v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.186.186 0 00.186-.185V9.005a.186.186 0 00-.186-.186H5.136a.185.185 0 00-.185.186v1.888c0 .102.082.185.185.185m-2.92 0h2.12a.185.185 0 00.185-.185V9.005a.185.185 0 00-.185-.186h-2.12a.185.185 0 00-.184.186v1.888c0 .102.083.185.185.185" />
    </svg>
  ),
  AWS: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.763 10.036c0 .27.037.486.096.65.074.195.166.36.296.496l-.01.01-.28.186-.098.055c-.14-.194-.26-.406-.35-.64a2.04 2.04 0 01-.137-.79c0-.435.114-.836.342-1.186.223-.35.55-.627.97-.827.42-.198.92-.297 1.492-.297.2 0 .41.014.63.04.22.027.44.07.66.13v1.15a4.97 4.97 0 00-.55-.13 4.22 4.22 0 00-.54-.04c-.35 0-.63.048-.83.145-.2.097-.35.24-.45.43-.1.19-.15.43-.15.72zm10.304 1.85c.57 0 1.04-.13 1.4-.39.36-.26.54-.63.54-1.11 0-.35-.1-.62-.31-.82-.21-.2-.55-.35-1.02-.46l-.73-.17c-.23-.05-.39-.13-.48-.23-.09-.1-.14-.24-.14-.42 0-.18.07-.32.22-.43.15-.1.36-.16.63-.16.16 0 .33.02.51.05.18.03.35.08.51.14v-1.05a4.3 4.3 0 00-.48-.1 4.5 4.5 0 00-.55-.04c-.52 0-.93.11-1.23.34-.3.23-.45.55-.45.97 0 .34.1.62.31.83.21.21.55.37 1.02.48l.7.17c.26.06.43.14.52.24.09.1.13.23.13.4 0 .3-.23.45-.68.45-.2 0-.41-.03-.64-.08a2.7 2.7 0 01-.63-.22v1.1c.19.08.4.14.64.18.24.04.48.06.72.06z" />
    </svg>
  ),
  Git: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.652 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.678-1.342-.396-2.009L7.611 3.527 4.647 6.491c-.603.605-.603 1.585 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l6.232-6.227c.605-.603.605-1.582 0-2.187z" />
    </svg>
  ),
  FastAPI: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L1.608 6v12L12 24l10.392-6V6L12 0zm-.624 5.265h1.248v3.6l2.64-2.64.912.912-2.64 2.64h3.6v1.248h-3.6l2.64 2.64-.912.912-2.64-2.64v3.6h-1.248v-3.6l-2.64 2.64-.912-.912 2.64-2.64H5.76V9.777h3.6l-2.64-2.64.912-.912 2.64 2.64v-3.6z" />
    </svg>
  ),
  Redis: ({ className, style }) => (
    <svg className={className} style={style} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 5.75L12.75.5 1.5 5.75v5.5L12.75 16.5 24 11.25v-5.5zM12.75 14.25L3.75 9.75v-2.5l9 4.5 9-4.5v2.5l-9 4.5z" />
    </svg>
  ),
};

const Skills: React.FC = () => {
  const developmentSkills = [
    { name: 'Python', icon: 'Python', color: '#3776AB' },
    { name: 'TypeScript', icon: 'TypeScript', color: '#3178C6' },
    { name: 'JavaScript', icon: 'JavaScript', color: '#F7DF1E' },
    { name: 'React', icon: 'React', color: '#61DAFB' },
    { name: 'Next.js', icon: 'NextJS', color: '#0f172a' },
    { name: 'Node.js', icon: 'NodeJS', color: '#339933' },
    { name: 'FastAPI', icon: 'FastAPI', color: '#009688' },
    { name: 'Tailwind CSS', icon: 'Tailwind', color: '#06B6D4' },
    { name: 'PostgreSQL', icon: 'PostgreSQL', color: '#4169E1' },
    { name: 'MongoDB', icon: 'MongoDB', color: '#47A248' },
    { name: 'Redis', icon: 'Redis', color: '#DC382D' },
    { name: 'Docker', icon: 'Docker', color: '#2496ED' },
    { name: 'AWS', icon: 'AWS', color: '#FF9900' },
    { name: 'Git', icon: 'Git', color: '#F05032' },
  ];

  const aiCloudSkills = [
    { name: 'LangChain / LangGraph', icon: Brain, color: '#0ea5e9' },
    { name: 'RAG & Embeddings', icon: Database, color: '#14b8a6' },
    { name: 'LLMs & AI Agents', icon: Brain, color: '#0284c7' },
    { name: 'TensorFlow / Keras', icon: Brain, color: '#0d9488' },
    { name: 'AWS / GCP / Azure', icon: Cloud, color: '#38bdf8' },
    { name: 'Kubernetes', icon: Cloud, color: '#0891b2' },
    { name: 'Kafka / RabbitMQ', icon: Database, color: '#64748b' },
    { name: 'CI/CD & Terraform', icon: Target, color: '#0f766e' },
  ];

  const softSkills = [
    { name: 'System Design', icon: Target, color: '#0ea5e9' },
    { name: 'Technical Leadership', icon: Users, color: '#14b8a6' },
    { name: 'Mentoring', icon: MessageCircle, color: '#0284c7' },
    { name: 'Problem Solving', icon: Lightbulb, color: '#f59e0b' },
    { name: 'Agile / Scrum', icon: HandshakeIcon, color: '#0d9488' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
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
            My Expertise
          </motion.span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Technologies</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A production-ready toolkit spanning full-stack development, AI/ML systems, and cloud architecture.
          </p>
        </motion.div>

        <motion.section
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-sky-500/15 to-teal-500/15">
              <Code2 className="w-6 h-6 text-sky-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Core Stack</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {developmentSkills.map((skill) => {
              const IconComponent = skillIcons[skill.icon];
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center"
                    whileHover={{ rotate: 5 }}
                  >
                    <IconComponent
                      className="w-8 h-8 md:w-10 md:h-10 transition-colors"
                      style={{ color: skill.color }}
                    />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.section
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-teal-500/15 to-sky-500/15">
              <Brain className="w-6 h-6 text-teal-600" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">AI / ML & Cloud</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {aiCloudSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: skill.color }} />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        <motion.section initial="hidden" animate="visible" variants={containerVariants}>
          <motion.div
            className="flex items-center gap-3 mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-green-500/20">
              <HandshakeIcon className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-xl md:text-2xl font-bold">Engineering Soft Skills</h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4"
            variants={containerVariants}
          >
            {softSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="glass-card p-3 md:p-4 flex flex-col items-center gap-2 group cursor-pointer"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -4,
                    borderColor: skill.color,
                  }}
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${skill.color}20` }}
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: skill.color }} />
                  </motion.div>
                  <span className="text-xs md:text-sm text-center font-medium">{skill.name}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};

export default Skills;
