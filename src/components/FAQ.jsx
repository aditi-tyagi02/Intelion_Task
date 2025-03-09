import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer a comprehensive range of digital services including web development, mobile apps, UI/UX design, and digital marketing solutions.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity and scope. A typical website project can take 4-8 weeks, while larger applications may take 3-6 months.'
  },
  {
    question: 'Do you offer ongoing support?',
    answer: 'Yes, we provide continuous support and maintenance services to ensure your digital products remain up-to-date and perform optimally.'
  },
  {
    question: 'What is your pricing model?',
    answer: 'We offer flexible pricing models including project-based, hourly rates, and retainer options. Each solution is tailored to meet your specific needs and budget.'
  }
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-red-100 dark:bg-red-700 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our services and process.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-lg font-semibold text-left">
                  {faq.question}
                </span>
                <span className="text-xl text-red-600 ml-4">
                  {activeIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 bg-gray-100 dark:bg-gray-700 rounded-b-lg">
                      <p className="text-gray-700 dark:text-gray-300">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
