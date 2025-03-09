import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'

const Navbar = ({ darkMode, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="/"
            className="text-2xl font-bold text-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Intelion
          </motion.a>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl"
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMenuOpen ? 1 : 0,
          height: isMenuOpen ? 'auto' : 0
        }}
        className="md:hidden bg-white dark:bg-gray-900"
      >
        <div className="container mx-auto px-4 py-4">
          <NavLinks mobile />
          <div className="mt-4">
            <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
      </motion.div>
    </motion.nav>
  )
}

const NavLinks = ({ mobile }) => {
  const links = ['Features', 'Testimonials', 'Pricing', 'Contact']
  return (
    <div className={mobile ? 'flex flex-col space-y-4' : 'flex space-x-8'}>
      {links.map((link) => (
        <motion.a
          key={link}
          href={`#${link.toLowerCase()}`}
          className="nav-link hover:text-primary transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {link}
        </motion.a>
      ))}
    </div>
  )
}

const ThemeToggle = ({ darkMode, toggleTheme }) => (
  <motion.button
    onClick={toggleTheme}
    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {darkMode ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
  </motion.button>
)

export default Navbar