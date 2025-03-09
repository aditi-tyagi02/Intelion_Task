import { motion } from 'framer-motion'
import { FiDollarSign, FiZap, FiBriefcase, FiTrendingUp } from 'react-icons/fi'

const HowWeDo = () => {
  const principles = [
    {
      icon: <FiDollarSign />,
      title: 'Cost-effectiveness',
      description: 'We offer affordable IT solutions that help you reduce costs and improve your bottom line.',
    },
    {
      icon: <FiZap />,
      title: 'Innovative Technology',
      description: 'We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.',
    },
    {
      icon: <FiBriefcase />,
      title: 'Industry Expertise',
      description: 'We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.',
    },
    {
      icon: <FiTrendingUp />,
      title: 'Scalability',
      description: 'Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.',
    },
  ]

  return (
    <section id="how-we-do" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How We Do It
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our approach to delivering exceptional IT services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-red-600 mb-6">
                {principle.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowWeDo
