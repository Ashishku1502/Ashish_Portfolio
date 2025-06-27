import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 p-4 rounded-full shadow-lg 
                bg-white dark:bg-tertiary-dark 
                text-primary-dark dark:text-secondary-dark
                hover:shadow-xl hover:scale-110
                focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark
                transition-all duration-300 ease-in-out z-50"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ rotate: 180 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? (
            <FaSun className="text-xl" />
          ) : (
            <FaMoon className="text-xl" />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle; 