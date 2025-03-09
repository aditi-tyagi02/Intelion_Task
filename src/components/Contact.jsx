import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiCheck } from 'react-icons/fi'

const Contact = () => {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    helpType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormState({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      phone: '',
      helpType: '',
      message: ''
    })
  }

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const benefits = [
    'Client-oriented',
    'Independent',
    'Competent',
    'Results-driven',
    'Problem-solving',
    'Transparent'
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Partner with Us for Comprehensive IT
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We're happy to answer any questions you may have and help you determine which of our services best fit your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <FiPhone className="mr-3 text-red-600" />
                  0612-2500-971
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <FiMail className="mr-3 text-red-600" />
                  contact@finolity.com
                </p>
                <p className="flex items-center text-gray-600 dark:text-gray-300">
                  <FiMapPin className="mr-3 text-red-600" />
                  Finolity Headquarters, Tech District
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Your Benefits</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <FiCheck className="mr-2 text-red-600" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6">Schedule a Free Consultation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Company Email</label>
                <input
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">How Can We Help You?</label>
                <select
                  name="helpType"
                  value={formState.helpType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                >
                  <option value="">Select Option</option>
                  <option value="managed-services">Managed Services</option>
                  <option value="cyber-security">Cyber Security</option>
                  <option value="web-development">Web Development</option>
                  <option value="cloud-services">Cloud Services</option>
                  <option value="consulting">IT Consulting</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="To better assist you, please describe how we can help..."
                  className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-red-600"
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg bg-red-600 text-white font-semibold text-lg transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-red-700'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact