import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'Fleet Management System',
      description:
        'A comprehensive fleet management platform with real-time vehicle tracking, maintenance scheduling, and analytics dashboard. Features include geofencing, fuel efficiency monitoring, and driver performance metrics.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Google Maps API', 'AWS'],
      github: 'https://github.com/Ashishku1502/fleet-management',
      live: 'https://fleet-management-demo.netlify.app',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A modern e-commerce platform with features like real-time inventory management, secure payment processing, and personalized product recommendations. Includes admin dashboard for analytics and order management.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redis', 'Stripe', 'AWS S3'],
      github: 'https://github.com/Ashishku1502/ecommerce-platform',
      live: 'https://mydukaan.sideprojects.fun',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'A modern real-time chat application featuring instant messaging, live presence indicators, and message history. Built with WebSocket technology for seamless real-time communication and MongoDB for persistent storage.',
      technologies: ['Socket.io', 'React.js', 'MongoDB', 'WebSocket'],
      github: 'https://github.com/Ashishku1502/real-time-chat',
      live: 'https://rooms-mern.onrender.com/',
    },
  ]

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-tertiary-light dark:bg-tertiary-dark p-6 rounded-lg h-full flex flex-col"
            >
              <h3 className="text-xl font-bold mb-4 text-textPrimary-light dark:text-textPrimary-dark">{project.title}</h3>
              <p className="text-textSecondary-light dark:text-textSecondary-dark mb-6 flex-grow">{project.description}</p>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-secondary-light/20 dark:bg-secondary-dark/20 text-secondary-light dark:text-secondary-dark px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                    aria-label={`View ${project.title} source code`}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                    aria-label={`Visit ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt className="text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects 