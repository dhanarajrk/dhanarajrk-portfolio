import { motion } from 'framer-motion';
import { contacts } from '../data/contacts.jsx';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeInOut' }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-screen flex items-center justify-center" // No background
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex justify-center space-x-8">
          {contacts.map((contact) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut', delay: contact.id * 0.1 }} // Staggered delay
              viewport={{ once: false, amount: 0.5 }}
              className="text-4xl text-gray-700 hover:text-black-600 transition-all duration-300 transform hover:scale-110" // Added hover effect
            >
              {contact.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;