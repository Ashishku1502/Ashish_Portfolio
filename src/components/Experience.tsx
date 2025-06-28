import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Development Engineer -1',
      company: 'Prime Trucks & Auto Services Pvt Ltd',
      location: 'Bengaluru, India',
      duration: 'Mar 2024 - Present',
      achievements: [
        'Led the development of a real-time fleet management dashboard using React.js and Node.js, improving operational efficiency by 25%',
        'Architected and implemented MongoDB database schemas, optimizing query performance by 30% for high-traffic endpoints',
        'Established TypeScript best practices and implemented strict type checking, reducing production bugs by 40%',
        'Set up automated CI/CD pipelines with Git and Jenkins, achieving 99.9% deployment success rate',
        'Mentored a team of 4 junior developers, conducting code reviews and implementing coding standards'
      ],
    },
    {
      title: 'Associate Software Development Engineer',
      company: 'Intellisense Software Private Limited',
      location: 'Bengaluru, India',
      duration: 'Jan 2021 - Dec 2023',
      achievements: [
        'Developed and maintained a reusable React component library of 30+ components, reducing development time by 40%',
        'Integrated and optimized payment gateways and analytics APIs, processing 10,000+ daily transactions',
        'Improved application performance by implementing Redis caching and MongoDB indexing, reducing API latency by 40%',
        'Collaborated with UX designers to implement responsive designs and accessibility improvements'
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 relative bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title mb-12 text-4xl font-extrabold text-center text-secondary-light dark:text-secondary-dark drop-shadow-lg">Experience</h2>
        <div className="relative flex">
          {/* Vertical timeline bar */}
          <div className="hidden md:block absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-secondary-light via-pink-400 to-blue-400 dark:from-secondary-dark dark:via-purple-700 dark:to-blue-700 rounded-full z-0"></div>
          <div className="flex-1 space-y-12 ml-0 md:ml-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
                className="relative bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-xl border border-white/30 dark:border-gray-700 rounded-2xl p-8 md:p-10 transition-transform hover:scale-[1.025] hover:shadow-2xl z-10"
              >
                {/* Timeline dot */}
                <span className="hidden md:block absolute -left-12 top-8 w-6 h-6 bg-gradient-to-br from-secondary-light via-pink-400 to-blue-400 dark:from-secondary-dark dark:via-purple-700 dark:to-blue-700 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></span>
                <h3 className="text-2xl font-bold text-secondary-light dark:text-secondary-dark mb-1">{exp.title}</h3>
                <p className="text-lg font-semibold mb-2 text-textPrimary-light dark:text-textPrimary-dark">{exp.company}</p>
                <div className="flex flex-wrap justify-between text-textSecondary-light dark:text-textSecondary-dark mb-4 text-base font-medium">
                <span>{exp.location}</span>
                <span>{exp.duration}</span>
              </div>
                <ul className="list-disc list-inside space-y-2 text-textSecondary-light dark:text-textSecondary-dark text-base pl-2">
                {exp.achievements.map((achievement, i) => (
                    <li key={i}><span className="font-medium">{achievement}</span></li>
                ))}
              </ul>
            </motion.div>
          ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Experience 