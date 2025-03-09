import { motion } from 'framer-motion'
import { FiAward, FiStar, FiCheckCircle } from 'react-icons/fi'

const EmotiveSection = () => {
  const recognitions = [
    {
      icon: <FiAward />,
      title: 'Forbes Member Council 2022',
      description: 'Recognized by Forbes for outstanding contributions and leadership in the industry.',
    },
    {
      icon: <FiStar />,
      title: 'Top App Development Company in India 2023',
      description: 'Awarded by Clutch.co for delivering exceptional app development services.',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Google Developers Certified Agency',
      description: 'Certified by Google for maintaining high standards of development and innovation.',
    },
    {
      icon: <FiAward />,
      title: 'Yourstory® Leader 2022',
      description: 'Recognized by Yourstory® for being a leader in delivering transformative technology solutions.',
    },
  ]

  return (
    <section id="recognition" className="py-20 bg-red-100 dark:bg-red-700 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Recognized by the Best
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Our commitment to excellence has earned us recognition from leading global organizations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl text-red-600 mb-6">
                {recognition.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                {recognition.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {recognition.description}
              </p>
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
    href="#awards"
    className="inline-block bg-red-600 dark:bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 dark:hover:bg-gray-700 transition-colors"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    View More Awards
  </motion.a>
</motion.div>

      </div>
    </section>
  )
}

export default EmotiveSection
