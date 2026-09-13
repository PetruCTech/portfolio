import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';

const titles = ['Senior Full Stack Engineer', 'AI/ML Engineer', 'Python & React Specialist'];

const Home: React.FC = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    
    const typeSpeed = isDeleting ? 50 : 100;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  return (
    <div className="min-h-full flex items-center justify-center px-4 py-8 particle-bg">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Initials Avatar */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 -z-10 rounded-3xl"
                style={{
                  background: 'linear-gradient(-45deg, #0ea5e9, #14b8a6, #38bdf8, #2dd4bf)',
                  backgroundSize: '400% 400%',
                  filter: 'blur(40px)',
                }}
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
              
              <motion.div
                className="absolute inset-0 -z-5 rounded-3xl border-2 border-sky-500/30"
                animate={{
                  scale: [1, 1.04, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute inset-3 -z-5 rounded-3xl border border-teal-500/20"
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
              />
              
              <motion.div
                className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[28rem] rounded-3xl overflow-hidden glass-card shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Petru Constantin"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
              
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full bg-sky-400"
                  style={{
                    top: `${20 + i * 15}%`,
                    left: i % 2 === 0 ? '-10%' : '110%',
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Introduction */}
          <motion.div
            className="text-center lg:text-left order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Sparkles className="w-5 h-5 text-sky-600" />
              <span className="text-muted-foreground text-sm md:text-base">Welcome to my portfolio</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              I am{' '}
              <span className="gradient-text glow-text">Petru Constantin</span>
            </motion.h1>
            
            <motion.div
              className="h-12 md:h-16 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                  {displayText}
                </span>
                <motion.span
                  className="w-0.5 h-6 md:h-8 bg-sky-500"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              </div>
            </motion.div>
            
            <motion.p
              className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              Building scalable AI-powered SaaS platforms, intelligent automation,
              and production-ready full-stack systems across cloud environments.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="#projects"
                className="glass-button flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </motion.a>
              
              <motion.a
                href="#contact"
                className="px-6 py-3 rounded-full border border-sky-500/50 text-sky-600 hover:bg-sky-500/10 transition-colors flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get In Touch</span>
              </motion.a>
            </motion.div>
            
            <motion.div
              className="grid grid-cols-3 gap-4 mt-10 max-w-md mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: 'AI/ML', label: 'LLM · RAG · Agents' },
                { value: 'Full Stack', label: 'Python · React' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="glass-card p-3 md:p-4 text-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <div className="text-xl md:text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
