import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code2, FolderGit2, Mail } from 'lucide-react';

interface FooterProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', icon: FolderGit2 },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const Footer: React.FC<FooterProps> = ({ currentPage, onNavigate }) => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
      className="fixed inset-x-0 bottom-0 z-50 bg-background"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <div className="glass h-16 md:h-20 px-4 md:px-8 flex items-center justify-center border-t border-border/60">
        <nav className="flex items-center gap-2 md:gap-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500/15 to-teal-500/15 border border-sky-500/40'
                    : 'hover:bg-sky-500/5'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  className={`w-5 h-5 md:w-6 md:h-6 transition-colors ${
                    isActive ? 'text-sky-600' : 'text-muted-foreground'
                  }`}
                />

                <motion.span
                  className={`text-sm font-medium whitespace-nowrap ${
                    isActive ? 'text-sky-700' : 'text-muted-foreground'
                  }`}
                  initial={{ width: 0, opacity: 0 }}
                  whileHover={{ width: 'auto', opacity: 1 }}
                  animate={{
                    width: isActive ? 'auto' : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden' }}
                >
                  {item.label}
                </motion.span>

                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 rounded-xl border-2 border-sky-400/40"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            );
          })}
        </nav>
      </div>
    </motion.footer>
  );
};

export default Footer;
