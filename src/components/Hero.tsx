import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaExternalLinkAlt } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary-light dark:text-secondary-dark mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-textPrimary-light dark:text-textPrimary-dark">
            Ashish Kumar
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-textSecondary-light dark:text-textSecondary-dark mb-6">
          Software Development Engineer-1.
          </h2>
          <p className="text-textSecondary-light dark:text-textSecondary-dark max-w-2xl mb-8 text-lg">
            I'm a Software Development Engineer specializing in building exceptional digital experiences. 
            With 4+ years of expertise in full-stack development, I focus on creating scalable, 
            high-performance applications that solve real-world problems.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="btn-primary bg-secondary-light dark:bg-secondary-dark text-white dark:text-primary-dark"
            >
              View My Work
            </Link>
            <a
              href="mailto:ashishku1502@gmail.com"
              className="btn-primary bg-transparent border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark"
            >
              Get In Touch
            </a>
            <a
              href="https://docs.google.com/document/d/1xL_pdcuvFkHDNUUoGR35Og1xLFXYZbJPJmfYV_LZdBE/edit?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center gap-2 bg-tertiary-light dark:bg-tertiary-dark border-2 border-secondary-light dark:border-secondary-dark text-secondary-light dark:text-secondary-dark hover:bg-secondary-light dark:hover:bg-secondary-dark hover:text-white dark:hover:text-primary-dark"
            >
              <FaExternalLinkAlt />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero