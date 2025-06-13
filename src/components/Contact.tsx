import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false
  });

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
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: false });

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: false });
        form.reset();
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ submitting: false, submitted: false, error: true });
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: false }));
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto px-4"
      >
        <h2 className="section-title text-center mb-12">Get In Touch</h2>
        
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

          <form 
            action="https://formspree.io/f/movwdzkk" 
            method="POST" 
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                required
                disabled={formStatus.submitting}
                className="w-full px-4 py-2 rounded-lg bg-tertiary-light dark:bg-tertiary-dark text-textPrimary-light dark:text-textPrimary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                required
                disabled={formStatus.submitting}
                className="w-full px-4 py-2 rounded-lg bg-tertiary-light dark:bg-tertiary-dark text-textPrimary-light dark:text-textPrimary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark disabled:opacity-50"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-textPrimary-light dark:text-textPrimary-dark mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                required
                rows={4}
                disabled={formStatus.submitting}
                className="w-full px-4 py-2 rounded-lg bg-tertiary-light dark:bg-tertiary-dark text-textPrimary-light dark:text-textPrimary-dark focus:outline-none focus:ring-2 focus:ring-secondary-light dark:focus:ring-secondary-dark disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus.submitting}
              className="w-full px-6 py-3 rounded-lg bg-secondary-light dark:bg-secondary-dark text-white font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formStatus.submitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {formStatus.submitted && (
              <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-100">
                Thank you for your message! I'll get back to you soon.
              </div>
            )}
            {formStatus.error && (
              <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100">
                Oops! Something went wrong. Please try again later.
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 
