import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const industries = [
    { name: 'Industry & Manufacturing', count: '150+' },
    { name: 'Healthcare', count: '200+' },
    { name: 'Banks & Insurance', count: '100+' },
    { name: 'Transportation & Logistics', count: '120+' },
    { name: 'Consulting Providers', count: '80+' },
    { name: 'Non-Profit', count: '50+' },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Solving IT challenges in every industry, every day
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our expertise spans across multiple industries, delivering tailored solutions that drive success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{industry.name}</h3>
              <p className="text-4xl font-bold text-red-600">{industry.count}</p>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Clients Served</p>
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
            href="#industries"
            className="inline-block bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Industries
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats