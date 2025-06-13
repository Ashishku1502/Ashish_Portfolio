import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      text: 'ashishku1502@gmail.com',
      href: 'mailto:ashishku1502@gmail.com',
    },
    {
      icon: <FaPhone />,
      text: '+91 79757 08160',
      href: 'tel:+917975708160',
    },
    {
      icon: <FaWhatsapp />,
      text: 'WhatsApp',
      href: 'https://wa.me/917975708160',
    },
    {
      icon: <FaMapMarkerAlt />,
      text: 'Bengaluru, Karnataka',
      href: '#',
    },
  ]

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-textSecondary-light dark:text-textSecondary-dark mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-textSecondary-light dark:text-textSecondary-dark hover:text-secondary-light dark:hover:text-secondary-dark transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-xl">{info.icon}</span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </div>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-textSecondary-light dark:text-textSecondary-dark">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-tertiary-light dark:bg-tertiary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark text-textPrimary-light dark:text-textPrimary-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-textSecondary-light dark:text-textSecondary-dark">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-tertiary-light dark:bg-tertiary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark text-textPrimary-light dark:text-textPrimary-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-textSecondary-light dark:text-textSecondary-dark">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full p-3 bg-tertiary-light dark:bg-tertiary-dark rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark text-textPrimary-light dark:text-textPrimary-dark"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full btn-primary bg-secondary-light dark:bg-secondary-dark text-white dark:text-primary-dark hover:bg-opacity-90 dark:hover:bg-opacity-90"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 