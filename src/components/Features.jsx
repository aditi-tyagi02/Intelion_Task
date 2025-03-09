import { motion } from 'framer-motion'
import { FiServer, FiShield, FiSmartphone, FiCloud, FiCode, FiUsers } from 'react-icons/fi'

const Features = () => {
  const services = [
    {
      icon: <FiServer />,
      title: 'Managed Services',
      description: 'Free up your internal resources to focus on the business by letting us handle day to day support services.',
    },
    {
      icon: <FiShield />,
      title: 'Cyber Security',
      description: 'Our experts identify vulnerabilities, assess risks, and implement robust security measures.',
    },
    {
      icon: <FiCode />,
      title: 'Web Development',
      description: 'Establish an impactful online presence with our professional web development services.',
    },
    {
      icon: <FiSmartphone />,
      title: 'Mobile Development',
      description: 'Create customized mobile apps that align with your brand and business goals.',
    },
    {
      icon: <FiCloud />,
      title: 'Cloud Services',
      description: 'Expert cloud solutions that meet your business needs and drive digital transformation.',
    },
    {
      icon: <FiUsers />,
      title: 'IT Consulting',
      description: 'Strategic technology guidance to achieve significant gains in business growth.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Simplifying IT for a complex world
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-red-600 mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
              <motion.a
                href={`#${service.title.toLowerCase().replace(' ', '-')}`}
                className="inline-block mt-6 text-red-600 font-semibold hover:text-red-700"
                whileHover={{ x: 5 }}
              >
                Learn more →
              </motion.a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#contact"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Solutions
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Features