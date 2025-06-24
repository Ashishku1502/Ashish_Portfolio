import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaJsSquare, FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt } from 'react-icons/fa'
import { SiLeetcode, SiTypescript, SiExpress, SiMongodb, SiRedis, SiJest, SiTailwindcss, SiMui } from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { BsGearFill } from 'react-icons/bs'

const About = () => {
  const skills = [
    { name: 'JavaScript', icon: <FaJsSquare className="text-2xl" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-2xl" /> },
    { name: 'React.js', icon: <FaReact className="text-2xl" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-2xl" /> },
    { name: 'Express.js', icon: <SiExpress className="text-2xl" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-2xl" /> },
    { name: 'AWS', icon: <FaAws className="text-2xl" /> },
    { name: 'Git', icon: <FaGitAlt className="text-2xl" /> },
    { name: 'CI/CD', icon: <BsGearFill className="text-2xl" /> },
    { name: 'RESTful APIs', icon: <TbApi className="text-2xl" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-2xl" /> },
  ]

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-textSecondary-light dark:text-textSecondary-dark">
              I'm a Software Development Engineer with a passion for building scalable web applications 
              and solving complex technical challenges. With over 3 years of hands-on experience, I've 
              developed expertise in full-stack development, focusing on React.js, Node.js, and cloud technologies.
            </p>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">
              My experience spans from developing high-performance frontend applications to designing 
              robust backend systems. I'm particularly skilled in optimizing application performance, 
              implementing clean architectures, and writing maintainable code.
            </p>
            <p className="text-textSecondary-light dark:text-textSecondary-dark">
              I've solved 200+ problems on LeetCode and regularly contribute to open-source projects. 
              I'm always eager to learn new technologies and share knowledge with the developer community.
            </p>
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/Ashishku1502"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/ashish-kumar-a39a17345/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://leetcode.com/u/Ashishku15/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                aria-label="LeetCode Profile"
              >
                <SiLeetcode />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-textPrimary-light dark:text-textPrimary-dark">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="bg-tertiary-light dark:bg-tertiary-dark p-4 rounded-lg text-center text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <div className="transform transition-transform group-hover:scale-110">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 
