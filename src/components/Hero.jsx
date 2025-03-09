import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            We manage your IT, so you can manage your 
            <TypeAnimation
              sequence={[
                'business',
                2000,
                'growth',
                2000,
                'success',
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-red-500 ml-2"
            />
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Take charge of your business continuity with innovative IT solutions
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.a
              href="#contact"
              className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Free Consultation
            </motion.a>
            
            <motion.a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Our Services
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            <div>
              <h3 className="text-3xl font-bold text-red-500">08</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-500">98%</h3>
              <p className="text-gray-300">Customer Satisfaction</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-500">470+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-500">3min</h3>
              <p className="text-gray-300">Average Response</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero