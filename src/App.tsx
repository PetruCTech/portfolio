import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import LandingAnimation from './components/LandingAnimation';
import AnimatedRoutes from './components/AnimatedRoutes';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLoading]);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Landing Animation */}
        <AnimatePresence>
          {isLoading && (
            <LandingAnimation onComplete={() => setIsLoading(false)} />
          )}
        </AnimatePresence>

        {/* Main App */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col min-h-screen"
        >
          {/* Fixed Header */}
          <Header />

          {/* Main Content Area */}
          <main 
            className="flex-1 pt-16 md:pt-20 pb-16 md:pb-20 overflow-auto"
            style={{
              minHeight: 'calc(100vh - 80px - 64px)',
            }}
          >
            <div className="h-full">
              <AnimatedRoutes currentPage={currentPage} />
            </div>
          </main>

          {/* Fixed Footer */}
          <Footer 
            currentPage={currentPage} 
            onNavigate={handleNavigate} 
          />
        </motion.div>
      </div>
    </ThemeProvider>
  );
}

export default App;
