"use client"
import { motion } from "framer-motion"
import { useState } from "react"

const Header = () => {
  const [activeSection, setActiveSection] = useState("home")

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-gray-100 bg-opacity-80 backdrop-blur-md z-10 shadow-md"
    >
      <nav className="container mx-auto px-6 py-4" aria-label="Main navigation">
        <ul className="flex justify-center space-x-6">
          {["home", "experience", "skills", "about"].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={`text-gray-700 hover:text-gray-900 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100 ${
                  activeSection === section ? "text-gray-900 font-semibold" : ""
                }`}
                onClick={() => setActiveSection(section)}
                aria-current={activeSection === section ? "page" : undefined}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

