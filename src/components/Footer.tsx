import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Footer = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      href: 'https://github.com/',
      label: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      href: 'https://linkedin.com/in/ashish-kumar-a39a17345/',
      label: 'LinkedIn',
    },
    {
      icon: <SiLeetcode />,
      href: 'https://leetcode.com/u/Ashishku15/',
      label: 'LeetCode',
    },
    {
      icon: <FaWhatsapp />,
      href: 'https://wa.me/917975708160',
      label: 'WhatsApp',
    },
  ]

  return (
    <footer className="bg-tertiary-light dark:bg-tertiary-dark py-8 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="text-textSecondary-light dark:text-textSecondary-dark text-sm">
            © {new Date().getFullYear()} Ashish Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
